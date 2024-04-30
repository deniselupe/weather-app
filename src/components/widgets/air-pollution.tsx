"use client";

import { useWeatherContext } from  "@/contexts/weather";
import AirPollutionIcon from "@/public/svgs/air-pollution.svg";

export default function AirPollution() {
    const { fetchAirData } = useWeatherContext();
    const airQualityIndex = fetchAirData();

    if (airQualityIndex === null) {
        return <div id="air-pollution" className="h-32 p-4 space-y-6 grow col-span-2 bg-gray-800 rounded-3xl" />
    } else {
        const airQualityDescription = () => {
            if (airQualityIndex === 1) {
                return "Air quality is good.";
            } else if (airQualityIndex === 2) {
                return "Air quality is fair.";
            } else if (airQualityIndex === 3) {
                return "Air quality is moderate.";
            } else if (airQualityIndex === 4) {
                return "Air quality is poor.";
            } else if (airQualityIndex === 5) {
                return "Air quality is very poor.";
            }
        };

        return (
            <div id="air-pollution" className="h-32 p-4 space-y-6 grow col-span-2 bg-gray-800 rounded-3xl">
                <div className="flex items-center gap-2">
                    <AirPollutionIcon className="w-4 h-4" />
                    <h2 className="text-xs">AIR POLLUTION</h2>
                </div>
                <div
                    id="progress-bar-outer"
                    className="relative h-2 rounded-full"
                    style={{
                        background: "linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)"
                    }}
                >
                    <div
                        id="progress-bar-inner"
                        style={{ width: `${Math.round((airQualityIndex / 5) * 100)}%` }}
                        className={`h-2 rounded-full`}
                    />
                    <div
                        className="absolute top-0 w-2 h-2 rounded-full bg-white ring-1 ring-black"
                        style={{
                            left: `${Math.round((airQualityIndex / 5) * 100)}%`,
                        }}
                    />
                </div>
                <p className="text-sm">
                    {airQualityDescription()}
                </p>
            </div>
        );
    }
}
