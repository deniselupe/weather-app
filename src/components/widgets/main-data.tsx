"use client";

import { useWeatherContext } from "@/contexts/weather";

export default function MainWeatherWidget() {
    const { fetchMainData } = useWeatherContext();
    const data = fetchMainData();

    if (data === null) {
        return null;
    } else {
        return (
            <div className="sm:w-72 sm:h-72 mb-2 p-4 text-white">
                <h2 className="text-2xl">My Location</h2>
                <p className="text-md">{data.location}</p>
                <h1 className="text-8xl">{data.currTemp}°</h1>
                <p className="text-md">{data.description}</p>
                <p className="text-md">High: {data.maxTemp}° Low: {data.minTemp}°</p>
            </div>
        );
    }
}