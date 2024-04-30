"use client";

import { useWeatherContext } from "@/contexts/weather";
import AirPollution from "@/components/widgets/air-pollution";
import UVIndexWidget from "@/components/widgets/uv-index";
import HourlyForecast from "@/components/widgets/hourly-forecast";

export default function CurrentWeatherWidget() {
    const { fetchCurrentData } = useWeatherContext();
    const data = fetchCurrentData();

    if (data === null) {
        return null;
    } else {
        return (
            <div className="min-w-64 flex flex-wrap justify-between md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
                <AirPollution />
                <div id="feels-like" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">FEELS LIKE</h2>
                    <p className="text-3xl">{data.feelsLike}°</p>
                </div>
                <div id="wind-speed" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">WIND SPEED</h2>
                    <p className="text-3xl">{data.windSpeed} MPH</p>
                </div>
                <HourlyForecast />
                <div id="humidity" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">HUMIDITY</h2>
                    <p className="text-3xl">{data.humidity}%</p>
                </div>
                <div id="pressure" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">PRESSURE</h2>
                    <p className="text-3xl">{data.pressure} inHg</p>
                </div>
                <div id="sunrise" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl flex flex-col justify-between">
                    <div>
                        <h2 className="text-xs">SUNRISE</h2>
                        <p className="text-2xl">{data.sunrise}</p>
                    </div>
                    <p className="text-xs">Sunset: {data.sunset}</p>
                </div>
                <UVIndexWidget uvIndex={data.uvIndex} />
                <div id="visibility" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">VISIBILITY</h2>
                    <p className="text-3xl">{data.visibility / 1000} km</p>
                </div>
                <div id="dew-point" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
                    <h2 className="text-xs">DEW POINT</h2>
                    <p className="text-3xl">{data.dewPoint}°F</p>
                </div>
            </div>
        );
    }
}
