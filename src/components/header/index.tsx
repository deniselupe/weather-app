"use client";

import React, { useState, useEffect, useCallback } from "react";
import { LocationsType } from "@/types/weather/geolocation";

export default function Header() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<LocationsType>([]);
    const [showAutoSuggest, setShowAutoSuggest] = useState(false);
    const [selectedItem, setSelectedItem] = useState(-1);
    const [showInputError, setShowInputError] = useState(false);

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
            const res = await fetch(`/frontend/api/geo?loc=${searchValue}`);
            const data = await res.json();

            setSearchResults(data);
        } else {
            setSearchResults([]);
        }

        setSelectedItem(-1);
    };

    const debouncedHandleSearch = useCallback(debounce(handleInputSearch, 300), []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        if (!!showInputError) {
            setShowInputError(false);
        }

        setSearchText(value);
        debouncedHandleSearch(value);
    };

    const handleInputKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowDown") {
            if (searchResults.length === 0) {
                return;
            } else {
                setSelectedItem((prev) => {
                    if (prev < searchResults.length - 1) {
                        return prev + 1;
                    } else {
                        return 0;
                    }
                });
            }
        } else if (e.key === "ArrowUp") {
            e.preventDefault();

            if (searchResults.length === 0) {
                return;
            } else {
                setSelectedItem((prev) => {
                    if (prev > 0) {
                        return prev - 1;
                    } else {
                        return searchResults.length - 1;
                    }
                });
            }
        } else if (e.key === "Enter") {
            if (selectedItem !== -1 && searchResults.length > 0) {
                if (e.target instanceof HTMLElement) e.target.blur();
                // Make API Call for Weather Data
            } else {
                // Let the user know that there are no items to search with input provided
                setShowInputError(true);
            }
        }
    };

    useEffect(() => {
        if (selectedItem !== -1 && searchResults.length > 0) {
            const selectedLoc = searchResults[selectedItem];
            const locName = selectedLoc["name"];
            const locState = selectedLoc["state"];
            const locCountry = selectedLoc["country"];
            const newSearchTextValue = `${locName}, ${locState}, ${locCountry}`;

            setSearchText(newSearchTextValue);
        }
    }, [selectedItem]);

    return (
        <header className="text-white font-light my-6">
            <div className="w-5/6 md:w-3/4 mx-auto text-black relative">
                <div id="search-bar" className="md:w-[400px] ml-auto">
                    <input
                        type="text"
                        placeholder="Search city..."
                        className={`w-full px-4 py-2 border ${showInputError ? "outline outline-red-700" : "outline-none"} rounded`}
                        value={searchText}
                        onChange={handleInputChange}
                        onKeyDown={handleInputKeydown}
                        onFocus={() => setShowAutoSuggest(true)}
                        onBlur={() => setShowAutoSuggest(false)}
                    />
                    {showInputError && <p className="mt-1 text-xs text-red-700">Not found. To make search precise, input the name of a city.</p>}
                </div>
                {
                    showAutoSuggest
                    &&
                    <div id="auto-suggest" className="w-full md:w-[400px] fixed absolute right-0 bg-white rounded">
                        {
                            searchResults.map((location, index) => {
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
                                        className={`px-4 py-2 ${selectedItem === index && "bg-zinc-100"} cursor-pointer flex justify-between items-center rounded`}
                                        onMouseEnter={() => setSelectedItem(index)}
                                        onMouseLeave={() => setSelectedItem(-1)}
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
