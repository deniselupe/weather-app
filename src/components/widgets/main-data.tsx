"use client";

import { useWeatherContext } from "@/contexts/weather";

export default function MainWeatherWidget() {
    const { fetchMainData } = useWeatherContext();
    const data = fetchMainData();

    if (data === null) {
        return null;
    } else {
        return (
            <div className="grow p-6 flex flex-col justify-center items-center text-white bg-neutral-900 rounded-2xl">
                <h2 className="text-2xl">My Location</h2>
                <p className="text-md">{data.location}</p>
                <h1 className="text-8xl">{data.currTemp}°</h1>
                <p className="text-md">{data.description}</p>
                <p className="text-md">High: {data.maxTemp}° Low: {data.minTemp}°</p>
            </div>
        );
    }
}