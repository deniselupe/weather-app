"use client";

import { useWeatherContext } from "@/contexts/weather";
import AirPollution from "@/components/widgets/air-pollution";
import FeelsLike from "@/components/widgets/feels-like";
import WindSpeed from "@/components/widgets/wind-speed";
import HourlyForecast from "@/components/widgets/hourly-forecast";
import Humidity from "@/components/widgets/humidity";
import Pressure from "@/components/widgets/pressure";
import SunriseSunset from "@/components/widgets/sunrise-sunset";
import UVIndex from "@/components/widgets/uv-index";
import Visibility from "@/components/widgets/visibility";
import DewPoint from "@/components/widgets/dew-point";

export default function CurrentWeatherWidget() {
    const { fetchCurrentData } = useWeatherContext();
    const data = fetchCurrentData();

    if (data === null) {
        return null;
    } else {
        return (
            <div className="lg:row-span-2 lg:col-span-2 xl:col-span-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2 text-white">
                <AirPollution />
                <FeelsLike feelsLike={data.feelsLike} mainTemp={data.mainTemp} />
                <WindSpeed windSpeed={data.windSpeed} windDegree={data.windDegree} />
                <HourlyForecast />
                <Humidity humidity={data.humidity} />
                <Pressure pressure={data.pressure} />
                <SunriseSunset sunrise={data.sunrise} sunset={data.sunset} />
                <UVIndex uvIndex={data.uvIndex} />
                <Visibility visibility={data.visibility} />
                <DewPoint dewPoint={data.dewPoint} />
            </div>
        );
    }
}
