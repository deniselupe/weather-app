"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { WeatherProviderProps, WeatherContextType, WeatherDataObjType, WeatherDataType } from "@/types/weather";

const WeatherContext = createContext({} as WeatherContextType);

export function WeatherProvider({ children }: WeatherProviderProps) {
    const [city, setCity] = useState("");
    const [currentWeather, setCurrentWeather] = useState<WeatherDataType>({});

    const fetchCurrentWeather = async (city: string, lat: number, lon: number) => {
        const res = await fetch(`/frontend/api/weather?lat=${lat}&lon=${lon}`);
        
        if (res.status === 200) {
            const data: WeatherDataObjType = await res.json();
            setCity(city);
            setCurrentWeather(data);
        }
    };

    const fetchMainWidgetData = () => {
        if (Object.keys(currentWeather).length > 0) {
            const data = structuredClone(currentWeather) as WeatherDataObjType;

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

    useEffect(() => {
        fetchCurrentWeather("Saint Louis", 38.6319657, -90.2428756);
    }, []);

    return (
        <WeatherContext.Provider value={{ fetchCurrentWeather, fetchMainWidgetData }}>
            {children}
        </WeatherContext.Provider>
    );
}

export const useWeatherContext = () => useContext(WeatherContext);
