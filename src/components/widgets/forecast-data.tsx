"use client";

import { useState } from "react";
import { useWeatherContext } from "@/contexts/weather";
import Image from "next/image";

export default function ForecastCarouselWidget() {
    const [forecastType, setForecastType] = useState<"Daily" | "Hourly">("Daily");
    const [currentPage, setCurrentPage] = useState(0);

    const { fetchForecastData } = useWeatherContext();
    const data = fetchForecastData();

    if (data === null) {
        return null;
    } else {
        const itemsPerPage = 8;
        const totalPages = Math.ceil(data.hourlyData.length / itemsPerPage);
        const hourlyOptions: Intl.DateTimeFormatOptions = { hour: "numeric", hour12: true };
        const dailyOptions: Intl.DateTimeFormatOptions = { weekday: "short" };

        const renderHourlyForecast = () => {
            const startIndex = currentPage * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const currentHourlyData = data.hourlyData.slice(startIndex, endIndex);

            return currentHourlyData.map((hour, index) => (
                <div key={index} id="hourly-forecast-item" className="w-28 h-32 grow p-4">
                    <Image
                        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
                        alt={hour.weather[0].description}
                        width={50}
                        height={50}
                    />
                    <p>{new Date(hour.dt * 1000).toLocaleTimeString("en", hourlyOptions)}</p>
                    <p>{Math.round(hour.temp)}°F</p>
                </div>
            ));
        };

        const renderDailyForecast = () => {
            return data.dailyData.map((day, index) => (
                <div key={index} id="daily-forecast-item" className="w-28 h-32 grow p-4">
                    <Image
                        src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                        alt={day.weather[0].description}
                        width={50}
                        height={50}
                    />
                    <p>{new Date(day.dt * 1000).toLocaleDateString("en-US", dailyOptions)}</p>
                    <p>H: {Math.round(day.temp.max)}° L: {Math.round(day.temp.max)}°</p>
                </div>
            ));
        };

        const handlePageChange = (direction: "prev" | "next") => {
            if (direction === "prev" && currentPage > 0) {
                setCurrentPage(currentPage - 1);
            } else if (direction === "next" && currentPage < totalPages - 1) {
                setCurrentPage(currentPage + 1);
            }
        };

        const handleForecastChange = (type: "Daily" | "Hourly") => {
            setForecastType(type);
        };

        return (
            <div id="forecast-carousel" className="p-4 text-white bg-gray-800 rounded-xl">
                <div id="carousel-header" className="mb-4 flex gap-4">
                    <div id="forecast-toggle" className="flex">
                        <button
                            onClick={() => handleForecastChange("Daily")}
                            className={`w-20 h-12 mr-4 px-4 ${forecastType === "Daily" && "border"} rounded`}
                        >
                            Daily
                        </button>
                        <button
                            onClick={() => handleForecastChange("Hourly")}
                            className={`w-20 h-12 px-4 ${forecastType === "Hourly" && "border"} rounded`}
                        >
                            Hourly
                        </button>
                    </div>
                    {
                        forecastType === "Hourly"
                        &&
                        <div id="pagination-buttons" className="flex">
                            <button
                                className={`w-12 h-12 mr-4 px-4 text-3xl ${currentPage === 0 && "text-gray-600"} rounded`}
                                onClick={() => handlePageChange('prev')}
                                disabled={currentPage === 0}
                            >
                                {'<'}
                            </button>
                            <button
                                className={`w-12 h-12 px-4 text-3xl ${currentPage === totalPages - 1 && "text-gray-600"} rounded`}
                                onClick={() => handlePageChange('next')}
                                disabled={currentPage === totalPages - 1}
                            >
                                {'>'}
                            </button>
                        </div>
                    }
                </div>
                <div id="forecast" className="flex flex-wrap">
                    {
                        forecastType === "Daily"
                            ?
                            renderDailyForecast()
                            :
                            renderHourlyForecast()
                    }
                </div>
            </div>
        );
    }
};
