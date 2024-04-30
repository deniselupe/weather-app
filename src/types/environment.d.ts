declare global {
    namespace NodeJS {
        interface ProcessEnv {
            WEATHER_API_KEY: string;
            GEOCODE_URL: string;
            AIR_POLLUTION_URL: string;
            CURRENT_WEATHER_URL: string;
        }
    }
}

export {};
