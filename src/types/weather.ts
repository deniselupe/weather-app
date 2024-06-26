import { AirPollutionDataObjType } from "@/types/air";

export namespace OpenWeatherMapAPIResponse {
    type WeatherType = {
        id: number;
        main: string;
        description: string;
        icon: string;
    };

    export type CurrentWeatherType = {
        dt: number;
        sunrise: number;
        sunset: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        weather: WeatherType[];
    };

    export type HourlyWeatherType = {
        dt: number;
        temp: number;
        feels_like: number;
        pressure: number;
        humidity: number;
        dew_point: number;
        uvi: number;
        clouds: number;
        visibility: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        weather: WeatherType[];
        pop: number;
    };

    export type DailyWeatherType = {
        dt: number;
        sunrise: number;
        sunset: number;
        moonrise: number;
        moonset: number;
        moon_phase: number;
        summary: string;
        temp: {
            day: number;
            min: number;
            max: number;
            night: number;
            eve: number;
            morn: number;
        };
        feels_like: {
            day: number;
            night: number;
            eve: number;
            morn: number;
        };
        pressure: number;
        humidity: number;
        dew_point: number;
        wind_speed: number;
        wind_deg: number;
        wind_gust: number;
        weather: WeatherType[];
        clouds: number;
        pop: number;
        uvi: number;
    };

    export type WeatherDataObjType = {
        lat: number;
        lon: number;
        timezone: string;
        timezone_offset: number;
        current: CurrentWeatherType;
        hourly: HourlyWeatherType[];
        daily: DailyWeatherType[];
    };
}

export namespace WeatherContextAPI {
    type MainDataType = {
        location: string;
        latitude: number;
        longitude: number;
        currTemp: number;
        description: string;
        minTemp: number;
        maxTemp: number;
    };

    type CurrentDataType = {
        feelsLike: number;
        mainTemp: number;
        humidity: number;
        pressure: number;
        sunrise: string;
        sunset: string;
        windSpeed: number;
        windDegree: number;
        uvIndex: number;
        visibility: number;
        dewPoint: number;
    };

    type ForecastDataType = {
        hourlyData: OpenWeatherMapAPIResponse.HourlyWeatherType[];
        dailyData: OpenWeatherMapAPIResponse.DailyWeatherType[];
    };

    export type WeatherProviderProps = {
        children: React.ReactNode;
    };

    export type WeatherContextType = {
        fetchWeatherData: (city: string, lat: number, lon: number) => void;
        fetchMainData: () => MainDataType | null;
        fetchAirData: () => number | null;
        fetchCurrentData: () => CurrentDataType | null;
        fetchForecastData: () => ForecastDataType | null;
        fetchHourlyForecast: () => OpenWeatherMapAPIResponse.HourlyWeatherType[] | null;
        fetchDailyForecast: () => OpenWeatherMapAPIResponse.DailyWeatherType[] | null;
    };

    export type AirPollutionDataType = AirPollutionDataObjType | {};
    
    export type WeatherDataType = OpenWeatherMapAPIResponse.WeatherDataObjType | {};
}
