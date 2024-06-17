declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NEXT_PUBLIC_MAPBOX_TOKEN: string;
            NEXT_PUBLIC_WEATHER_API_KEY: string;
            GEOCODE_URL: string;
            AIR_POLLUTION_URL: string;
            CURRENT_WEATHER_URL: string;
        }
    }
}

export {};
