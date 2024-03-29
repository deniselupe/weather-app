"use client";

import React, { useState, useEffect, useCallback } from "react";
import { LocationsType } from "@/types/geolocation";
import { useWeatherContext } from "@/contexts/weather";

export default function Header() {
    const [searchText, setSearchText] = useState("");
    const [locationResults, setLocationResults] = useState<LocationsType>([]);
    const [selectedLocation, setSelectedLocation] = useState(-1);
    const [showAutoSuggest, setShowAutoSuggest] = useState(false);
    const [showInputError, setShowInputError] = useState(false);
    
    const { fetchWeatherData } = useWeatherContext();

    const handleSubmit = () => {
        const location = locationResults[selectedLocation];
        const city = location["name"];
        const latCoord = location["lat"];
        const lonCoord = location["lon"];

        fetchWeatherData(city, latCoord, lonCoord);
        setShowInputError(false);
    };

    const debounce = (fn: (value: string) => void, delay: number) => {
        let timeoutId: NodeJS.Timeout;

        return (value: string) => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                fn(value);
            }, delay);
        };
    };

    const handleInputSearch = async (value: string) => {
        if (value.trim().length > 0) {
            const searchValue = encodeURIComponent(value.trim());
            const res = await fetch(`/weather/api/geo?loc=${searchValue}`);
            const data = await res.json();

            setLocationResults(data);
        } else {
            setLocationResults([]);
        }
    };

    const debouncedHandleSearch = useCallback(debounce(handleInputSearch, 300), []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (!!showInputError) setShowInputError(false);

        setSearchText(value);
        setSelectedLocation(-1);
        debouncedHandleSearch(value);
    };

    const handleInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const allowedKeys = ["ArrowDown", "ArrowUp", "Enter"];

        if (!allowedKeys.includes(e.key)) return;

        if (e.key === "ArrowDown") {
            if (locationResults.length === 0) return;

            setSelectedLocation((prev) => {
                if (prev < locationResults.length - 1) {
                    return prev + 1;
                } else {
                    return 0;
                }
            });
        } else if (e.key === "ArrowUp") {
            e.preventDefault();

            if (locationResults.length === 0) return;

            setSelectedLocation((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    return locationResults.length - 1;
                }
            });
        } else if (e.key === "Enter") {
            if (selectedLocation === -1 || locationResults.length === 0 || searchText.trim().length === 0) {
                setShowInputError(true);
                return;
            }

            if (e.target instanceof HTMLElement) e.target.blur();

            handleSubmit();
        }
    };

    const handleInputFocus = () => {
        setShowAutoSuggest(true);
    };

    const handleInputBlur = () => {
        // Delay auto-suggest dropdown hiding to avoid interfering with onClick
        setTimeout(() => {
            setShowAutoSuggest(false);
        }, 200);
    };

    useEffect(() => {
        if (selectedLocation !== -1 && locationResults.length > 0) {
            const location = locationResults[selectedLocation];
            const locName = location["name"];
            const locState = location["state"];
            const locCountry = location["country"];
            const newSearchTextValue = `${locName}, ${locState}, ${locCountry}`;

            setSearchText(newSearchTextValue);
        }
    }, [selectedLocation]);

    return (
        <header className="text-white font-light my-6">
            <div className="w-5/6 md:w-3/4 mx-auto text-black relative">
                <div id="search-bar" className="md:w-[400px] ml-auto">
                    {showInputError && <p className="mb-1 text-xs text-red-700">Not found. To make search precise, input the name of a city.</p>}
                    <input
                        type="text"
                        placeholder="Search city..."
                        className={`w-full px-4 py-2 border ${showInputError ? "outline outline-red-700" : "outline-none"} rounded`}
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeydown}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                    />
                </div>
                {
                    showAutoSuggest
                    &&
                    <div id="auto-suggest" className="w-full md:w-[400px] fixed absolute right-0 bg-white rounded">
                        {
                            locationResults.map((location, index) => {
                                const name = location["name"];
                                const state = location["state"];
                                const country = location["country"];
                                const lat = location["lat"];
                                const lon = location["lon"];
                                const uniqId = `${lat}${lon}`;

                                return (
                                    <div
                                        id="auto-suggest-item"
                                        key={uniqId}
                                        className={`px-4 py-2 ${selectedLocation === index && "bg-zinc-100"} cursor-pointer flex justify-between items-center rounded`}
                                        onMouseEnter={() => setSelectedLocation(index)}
                                        onClick={handleSubmit}
                                    >
                                        <p className="text-sm">{name}, {state}, {country}</p>
                                        <p className="text-xs text-gray-500">{lat}, {lon}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                }
            </div>
        </header>
    );
}
