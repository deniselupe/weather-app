declare global {
    namespace NodeJS {
        interface ProcessEnv {
            WEATHER_API_KEY: string;
        }
    }
}

export {};
