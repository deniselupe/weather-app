"use client";

import { useWeatherContext } from "@/contexts/weather";

export default function LargeCities() {
    const { fetchWeatherData } = useWeatherContext();
    const largeCities = [
        {
            cityName: "New York",
            latitude: 40.7127281,
            longitude: -74.0060152,
        },
        {
            cityName: "Los Angeles",
            latitude: 34.0536909,
            longitude: -118.242766,
        },
        {
            cityName: "Toronto",
            latitude: 43.6534817,
            longitude: -79.3839347,
        },
        {
            cityName: "London",
            latitude: 51.5073219,
            longitude: -0.1276474,
        },
        {
            cityName: "Tokyo",
            latitude: 35.6828387,
            longitude: 139.7594549,
        },
        {
            cityName: "Beijing",
            latitude: 39.906217,
            longitude: 116.3912757,
        },
        {
            cityName: "Sidney",
            latitude: -33.8698439,
            longitude: 151.2082848,
        }
    ];

    const submitHandler = (largeCity: { cityName: string, latitude: number, longitude: number}) => {
        const { cityName, latitude, longitude } = largeCity;
        fetchWeatherData(cityName, latitude, longitude);
    };
    
    return (
        <div id="large-cities" className="w-full lg:w-1/4 p-6 flex flex-col gap-2 text-white bg-neutral-900 border border-neutral-800 rounded-2xl">
            <h2 className="text-sm">OTHER LARGE CITIES</h2>
            <menu className="flex-1 flex flex-col justify-between">
                {
                    largeCities.map((largeCity) => {
                        return (
                            <button 
                                key={`${largeCity.latitude},${largeCity.longitude}`}
                                className="block w-full text-left p-2.5 hover:bg-white hover:bg-opacity-10 rounded-lg border border-neutral-800"
                                onClick={() => submitHandler(largeCity)}
                            >
                                {largeCity.cityName}
                            </button>
                        )
                    })
                }
            </menu>
        </div>
    );
}
