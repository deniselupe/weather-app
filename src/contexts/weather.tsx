"use client";

import { useState, createContext, useContext, useEffect } from "react";
import { OpenWeatherMapAPIResponse, WeatherContextAPI } from "@/types/weather";
import { AirPollutionDataObjType } from "@/types/air";

const WeatherContext = createContext({} as WeatherContextAPI.WeatherContextType);

export function WeatherProvider({ children }: WeatherContextAPI.WeatherProviderProps) {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState<WeatherContextAPI.WeatherDataType>({});
    const [airPollutionData, setAirPollutionData] = useState<WeatherContextAPI.AirPollutionDataType>({});

    const fetchWeatherData = async (city: string, lat: number, lon: number) => {
        try {
            const [weatherResponse, airResponse] = await Promise.all([
                fetch(`/weather/api/weather?lat=${lat}&lon=${lon}`),
                fetch(`/weather/api/air?lat=${lat}&lon=${lon}`)
            ]);

            if (weatherResponse.status === 200 && airResponse.status === 200) {
                const fetchedWeather: OpenWeatherMapAPIResponse.WeatherDataObjType = await weatherResponse.json();
                const fetchedAir: AirPollutionDataObjType = await airResponse.json();

                setCity(city);
                setWeatherData(fetchedWeather);
                setAirPollutionData(fetchedAir);
            }
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    };

    const fetchMainData = () => {
        if (Object.keys(weatherData).length > 0) {
            const data = structuredClone(weatherData) as OpenWeatherMapAPIResponse.WeatherDataObjType;

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

    const fetchAirData = () => {
        if (Object.keys(airPollutionData).length > 0) {
            const data = structuredClone(airPollutionData) as AirPollutionDataObjType;

            return data.main.aqi;
        }

        return null;
    };

    const fetchCurrentData = () => {
        if (Object.keys(weatherData).length > 0) {
            const data = structuredClone(weatherData) as OpenWeatherMapAPIResponse.WeatherDataObjType;
            const options: Intl.DateTimeFormatOptions = { hour: "numeric", minute: "numeric", hour12: true };

            return {
                feelsLike: Math.round(data.current.feels_like),
                mainTemp: Math.round(data.current.temp),
                humidity: data.current.humidity,
                pressure: (data.current.pressure * 0.02953).toFixed(2),
                sunrise: new Date(data.current.sunrise * 1000).toLocaleTimeString("en", options),
                sunset: new Date(data.current.sunset * 1000).toLocaleTimeString("en", options),
                windSpeed: Math.round(data.current.wind_speed),
                windDegree: data.current.wind_deg,
                uvIndex: data.current.uvi,
                visibility: data.current.visibility,
                dewPoint: data.current.dew_point,
            };
        }

        return null;
    };

    const fetchForecastData = () => {
        if (Object.keys(weatherData).length > 0) {
            const data = structuredClone(weatherData) as OpenWeatherMapAPIResponse.WeatherDataObjType;

            return {
                hourlyData: data.hourly,
                dailyData: data.daily
            };
        }

        return null;
    };

    const fetchHourlyForecast = () => {
        const data = structuredClone(weatherData) as OpenWeatherMapAPIResponse.WeatherDataObjType;

        if (data["hourly"]) {
            return data["hourly"];
        }

        return null;
    };

    const fetchDailyForecast = () => {
        const data = structuredClone(weatherData) as OpenWeatherMapAPIResponse.WeatherDataObjType;

        if (data["daily"]) {
            return data["daily"];
        }

        return null;
    };

    useEffect(() => {
        fetchWeatherData("Saint Louis", 38.6319657, -90.2428756);
    }, []);

    return (
        <WeatherContext.Provider
            value={{
                fetchWeatherData,
                fetchMainData,
                fetchAirData,
                fetchCurrentData,
                fetchForecastData,
                fetchHourlyForecast,
                fetchDailyForecast
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
}

export const useWeatherContext = () => useContext(WeatherContext);
