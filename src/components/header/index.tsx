"use client";

import React, { useState, useEffect } from "react";
import { LocationsType } from "@/types/weather/geolocation";

export default function Header() {
    const [searchText, setSearchText] = useState("");
    const [searchResults, setSearchResults] = useState<LocationsType>([]);
    const [showAutoSuggest, setShowAutoSuggest] = useState(false);
    const [selectedItem, setSelectedItem] = useState(-1);

    const handleKey = async (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowDown") {
            setSelectedItem((prev) => {
                if (prev < searchResults.length - 1) {
                    return prev + 1;
                } else {
                    return 0;
                }
            });
        } else if (e.key === "ArrowUp") {
            setSelectedItem((prev) => {
                if (prev > 0) {
                    return prev - 1;
                } else {
                    return searchResults.length - 1;
                }
            });
        } else if (e.key === "Enter") {
            if (searchResults.length > 0) {
                // Make API Call for Weather Data
            } else {
                // Let the user know that there are no items to search with input provided
            }
        }
    };

    const handleInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;

        setSearchText(e.target.value);

        if (value.trim().length > 0) {
            const searchValue = encodeURIComponent(value.trim());
            const res = await fetch(`/frontend/api/geo?loc=${searchValue}`)
            const data = await res.json();

            setSearchResults(data);
        } else {
            setSearchResults([]);
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
                <div id="search-bar" className="md:w-[400px] ml-auto flex gap-2 justify-end items-center">
                    <input
                        type="text"
                        placeholder="City, State, Zip Code"
                        className="flex-1 px-4 py-2 border outline-none rounded"
                        value={searchText}
                        onKeyUp={handleKey}
                        onChange={handleInput}
                        onFocus={() => setShowAutoSuggest(true)}
                        onBlur={() => setShowAutoSuggest(false)}
                    />
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