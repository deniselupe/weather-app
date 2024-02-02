"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { WeatherProviderProps, WeatherContextType, WeatherDataObjType, WeatherDataType } from "@/types/weather";

const WeatherContext = createContext({} as WeatherContextType);

export function WeatherProvider({ children }: WeatherProviderProps) {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherDataType>({});

    const fetchWeatherData = async (city: string, lat: number, lon: number) => {
        const res = await fetch(`/frontend/api/weather?lat=${lat}&lon=${lon}`);
        
        if (res.status === 200) {
            const data: WeatherDataObjType = await res.json();
            setCity(city);
            setWeatherData(data);
        }
    };

    const fetchMainData = () => {
        if (Object.keys(weatherData).length > 0) {
            const data = structuredClone(weatherData) as WeatherDataObjType;

            return {
                location: city,
                currTemp: Math.round(data.current.temp),
                description: data.current.weather[0].main,
                minTemp: Math.round(data.daily[0].temp.min),
                maxTemp: Math.round(data.daily[0].temp.max),
            };
        }

        return null;
    };

    const fetchCurrentData = () => {
        if (Object.keys(weatherData).length > 0) {
            const data = structuredClone(weatherData) as WeatherDataObjType;
            const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "numeric", hour12: true };

            return {
                feelsLike: Math.round(data.current.feels_like),
                humidity: data.current.humidity,
                pressure: (data.current.pressure * 0.02953).toFixed(2),
                sunrise: new Date(data.current.sunrise * 1000).toLocaleTimeString("en", options),
                sunset: new Date(data.current.sunset * 1000).toLocaleTimeString("en", options),
                windSpeed: Math.round(data.current.wind_speed),
                uvIndex: data.current.uvi
            };
        }

        return null;
    };

    useEffect(() => {
        fetchWeatherData("Saint Louis", 38.6319657, -90.2428756);
    }, []);

    return (
        <WeatherContext.Provider value={{ fetchWeatherData, fetchMainData, fetchCurrentData }}>
            {children}
        </WeatherContext.Provider>
    );
}

export const useWeatherContext = () => useContext(WeatherContext);
