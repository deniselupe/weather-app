"use client";

import { useWeatherContext } from "@/contexts/weather";

export default function CurrentWeatherWidget() {
    const { fetchCurrentData } = useWeatherContext();
    const data = fetchCurrentData();

    if (data === null) {
        return null;
    } else {
        return (
            <div className="md:min-w-[420px] mb-2 flex flex-wrap justify-around md:grid md:grid-rows-2 md:grid-cols-3 gap-4 text-white">
                <div id="feels-like" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">FEELS LIKE</h2>
                    <p className="text-3xl">{data.feelsLike}°</p>
                </div>
                <div id="humidity" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">HUMIDITY</h2>
                    <p className="text-3xl">{data.humidity}%</p>
                </div>
                <div id="pressure" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">PRESSURE</h2>
                    <p className="text-3xl">{data.pressure} inHg</p>
                </div>
                <div id="sunrise" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">SUNRISE</h2>
                    <p className="text-2xl">{data.sunrise}</p>
                    <p className="mt-6 text-xs">Sunset: {data.sunset}</p>
                </div>
                <div id="wind-speed" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">WIND SPEED</h2>
                    <p className="text-3xl">{data.windSpeed} MPH</p>
                </div>
                <div id="uv-index" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">UV INDEX</h2>
                    <p className="text-3xl">{data.uvIndex}</p>
                </div>
            </div>
        );
    }
}
