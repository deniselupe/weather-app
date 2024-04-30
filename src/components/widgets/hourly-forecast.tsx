"use client";

import { useState } from "react";
import { useWeatherContext } from "@/contexts/weather";
import Image from "next/image";

export default function HourlyForecast() {
    const [currentPage, setCurrentPage] = useState(0);

    const { fetchHourlyData } = useWeatherContext();
    const data = fetchHourlyData();

    const renderHourlyForecast = () => {
        if (data === null) {
            return null;
        } else {
            const itemsPerPage = 5;
            const totalPages = Math.ceil(data.length / itemsPerPage);
            const hourlyOptions: Intl.DateTimeFormatOptions = { hour: "numeric", hour12: true };
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentHourlyData = data.slice(startIndex, endIndex);

            console.log("currentHourlyData: ", currentHourlyData);
    
            return currentHourlyData.map((hour, index) => (
                <div key={index} id="hourly-forecast-item" className="space-y-1 text-xs">
                    <Image
                        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                        alt={hour.weather[0].description}
                        width={20}
                        height={20}
                    />
                    {index === 0 ? "Now" : <p>{new Date(hour.dt * 1000).toLocaleTimeString("en", hourlyOptions)}</p>}
                    <p>{Math.round(hour.temp)}°F</p>
                </div>
            ));
        }
    };

    return (
        <div id="hourly-forecast" className="h-32 p-4 space-y-4 grow col-span-2 bg-gray-800 rounded-3xl">
            <p className="text-xs">HOURLY FORECAST</p>
            <div className="flex justify-between items-center gap-4">
                {renderHourlyForecast()}
            </div>
        </div>
    );
}
