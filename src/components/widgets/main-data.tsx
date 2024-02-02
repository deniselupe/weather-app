"use client";

import { useWeatherContext } from "@/contexts/weather";

export default function MainWeatherWidget() {
    const { fetchMainWidgetData } = useWeatherContext();
    const data = fetchMainWidgetData();

    if (data === null) {
        return null;
    } else {
        return (
            <div className="sm:w-72 sm:h-72 mb-2 p-10 flex flex-col items-center justify-center text-white">
                <h2 className="text-2xl">My Location</h2>
                <p className="text-md">{data.location}</p>
                <h1 className="text-8xl">{data.currTemp}°</h1>
                <p className="text-md">{data.description}</p>
                <p className="text-md">High: {data.maxTemp}° Low: {data.minTemp}°</p>
            </div>
        );
    }
}