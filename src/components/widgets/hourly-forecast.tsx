"use client";

import { useState } from "react";
import { useWeatherContext } from "@/contexts/weather";
import Image from "next/image";

export default function HourlyForecast() {
    const [currentPage, setCurrentPage] = useState(0);

    const { fetchHourlyForecast } = useWeatherContext();
    const data = fetchHourlyForecast();

    if (data === null) {
        return <div id="hourly-forecast" className="min-h-32 p-6 col-span-2 bg-neutral-900 rounded-2xl" />;
    } else {
        const itemsPerPage = 5;
        const totalPages = Math.ceil(data.length /itemsPerPage);

        const pageChangeHandler = (direction: "prev" | "next") => {
            if (direction === "prev" && currentPage > 0) {
                setCurrentPage((prev) => prev - 1);
            } else if (direction === "next" && currentPage < totalPages - 1) {
                setCurrentPage((prev) => prev + 1);
            }
        };

        const renderHourlyForecast = () => {
            const hourlyOptions: Intl.DateTimeFormatOptions = { hour: "numeric", hour12: true };
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentHourlyData = data.slice(startIndex, endIndex);

            return currentHourlyData.map((hour, index) => (
                <div key={hour.dt} id="hourly-forecast-item" className="text-xs">
                    <p>{index === 0 && currentPage === 0 ? "Now" : new Date(hour.dt * 1000).toLocaleTimeString("en", hourlyOptions)}</p>
                    <Image 
                        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                        alt={hour.weather[0].description}
                        width={25}
                        height={25}
                    />
                    <p>{Math.round(hour.temp)}°</p>
                </div>
            ));
        };

        return (
            <div id="hourly-forecast" className="min-w-64 min-h-32 p-6 col-span-2 flex flex-col justify-between bg-neutral-900 rounded-2xl">
                <div className="flex justify-between items-center gap-4">
                    <p className="text-xs">HOURLY FORECAST</p>
                    {
                        data !== null
                        &&
                        <div id="hourly-pagination-buttons" className="flex gap-4">
                            <button
                                className="w-5 h-5 flex justify-center items-center disabled:text-gray-600 enabled:hover:bg-gray-700 rounded"
                                disabled={currentPage === 0}
                                onClick={() => pageChangeHandler("prev")}
                            >
                                {"<"}
                            </button>
                            <button
                                className="w-5 h-5 flex justify-center items-center disabled:text-gray-600 enabled:hover:bg-gray-700 rounded"
                                disabled={currentPage === totalPages - 1}
                                onClick={() => pageChangeHandler("next")}
                            >
                                {">"}
                            </button>
                        </div>
                    }
                </div>
                <div className="flex justify-between items-center gap-4">
                    {renderHourlyForecast()}
                </div>
            </div>
        );
    }
}
