"use client";

import React, { useState } from "react";
import { useWeatherContext } from "@/contexts/weather";
import Map, { Layer, Source } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const MAPBOX_TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN;
const OPENWEATHERMAP_TOKEN = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export default function MapBox() {
    const [mapLayer, setMapLayer] = useState("precipitation_new");

    const { fetchMainData } = useWeatherContext();
    const mainData = fetchMainData();
    
    if (mainData === null) {
        return null;
    } else {
        const { latitude, longitude } = mainData;

        return (
            <div className="relative w-full lg:w-3/4">
                <form className="absolute m-4 right-0 z-10">
                    <select 
                        value={mapLayer} 
                        onChange={(event) => setMapLayer(event.target.value)}
                        className="p-2 text-sm rounded-lg"
                    >
                        <option value="precipitation_new">Precipitation</option>
                        <option value="wind_new">Wind Speed</option>
                        <option value="temp_new">Temperature</option>
                        <option value="clouds_new">Clouds</option>
                        <option value="pressure_new">Sea Level Pressure</option>
                    </select>
                </form>
                <Map 
                    mapboxAccessToken={MAPBOX_TOKEN}
                    latitude={latitude}
                    longitude={longitude}
                    zoom={7}
                    pitch={60}
                    bearing={-60}
                    style={{
                        minHeight: "16rem",
                        borderRadius: "1rem",
                    }}
                    mapStyle="mapbox://styles/mapbox/dark-v11"
                    attributionControl={false}
                >
                    <Source
                        key={mapLayer}
                        id="weatherSource"
                        type="raster"
                        tiles={[
                            `https://tile.openweathermap.org/map/${mapLayer}/{z}/{x}/{y}.png?appid=${OPENWEATHERMAP_TOKEN}`,
                        ]}
                        tileSize={256}
                    >
                        <Layer
                            id="weatherLayer"
                            type="raster"
                            minzoom={0}
                            maxzoom={15}
                        />
                    </Source>
                </Map>
            </div>
        );
    }
}
