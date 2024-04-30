"use client";

import { useWeatherContext } from "@/contexts/weather";
import Image from "next/image";

export default function DailyForecast() {
    const { fetchDailyForecast } = useWeatherContext();
    const data = fetchDailyForecast();

    if (data === null) {
        return null;
    } else {
        const renderDailyForecast = () => {
            const dailyOptions: Intl.DateTimeFormatOptions = { weekday: "short" };

            return data.map((day, index) => (
                <div key={index} id="daily-forecast-item" className="text-xs flex justify-between items-center gap-2">
                    <p className="min-w-[33px]">{index === 0 ? "Today" : new Date(day.dt * 1000).toLocaleDateString("en-US", dailyOptions)}</p>
                    <Image
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt={day.weather[0].description}
                        width={20}
                        height={20}
                    />
                    <p>{Math.round(day.temp.min)}°</p>
                    <div id="range-bar-outer" className="relative w-full h-2 bg-gray-700 rounded-full">
                        <div 
                            id="range-bar-inner"
                            className="absolute h-2 rounded-full bg-gradient-to-l from-green-300 to-blue-400"
                            style={{
                                width: `${Math.round(((day.temp.max - day.temp.min) / 100) * 100)}%`,
                                left: `${Math.round((day.temp.min / 100) * 100)}%`
                            }}
                        />
                    </div>
                    <p>{Math.round(day.temp.max)}°</p>
                </div>
            ));
        };

        return (
            <div id="forecast-carousel" className="p-8 space-y-8 text-white bg-gray-800 rounded-3xl">
                <h2 className="text-sm">DAILY FORECAST</h2>
                <div className="flex flex-col">
                    {renderDailyForecast()}
                </div>
            </div>
        );
    }
};
