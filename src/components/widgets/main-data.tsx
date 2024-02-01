"use client";

import { useWeatherContext } from "@/contexts/weather";

export default function MainWeatherWidget() {
    const { fetchMainWidgetData } = useWeatherContext();
    const data = fetchMainWidgetData();

    if (data === null) {
        return null;
    } else {
        return (
            <div className="md:w-96 md:h-96 mb-2 flex flex-col items-center justify-center text-white border">
                <h2 className="text-2xl">My Location</h2>
                <p className="text-md">{data.location}</p>
                <h1 className="text-8xl">{data.currTemp}°</h1>
                <p className="text-md">{data.description}</p>
                <p className="text-md">High: {data.maxTemp}° Low: {data.minTemp}°</p>
            </div>
        );
    }
}