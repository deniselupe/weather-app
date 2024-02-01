"use client";

import { useState, createContext, useContext } from "react";
import { WeatherProviderProps, WeatherContextType, CurrentWeatherObjType, CurrentWeatherType } from "@/types/weather";

const WeatherContext = createContext({} as WeatherContextType);

export function WeatherProvider({ children }: WeatherProviderProps) {
    const [currentWeather, setCurrentWeather] = useState<CurrentWeatherType>({});

    const fetchCurrentWeather = async (lat: number, lon: number) => {
        const res = await fetch(`/frontend/api/weather?lat=${lat}&lon=${lon}`);
        
        if (res.status === 200) {
            const data: CurrentWeatherObjType = await res.json();
            setCurrentWeather(data);
        }
    };

    return (
        <WeatherContext.Provider value={{ fetchCurrentWeather }}>
            {children}
        </WeatherContext.Provider>
    );
}

export const useWeatherContext = () => useContext(WeatherContext);
