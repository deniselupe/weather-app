type WeatherType = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

type CurrentWeatherType = {
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

type HourlyWeatherType = {
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

type DailyWeatherType = {
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

type MainDataType = {
    location: string;
    currTemp: number;
    description: string;
    minTemp: number;
    maxTemp: number;
};

type CurrentDataType = {
    feelsLike: number;
    humidity: number;
    pressure: string;
    sunrise: string;
    sunset: string;
    windSpeed: number;
    uvIndex: number;
};

type ForecastDataType = {
    dailyData: DailyWeatherType[];
    hourlyData: HourlyWeatherType[];
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

export type WeatherDataType = WeatherDataObjType | {};

export type WeatherProviderProps = {
    children: React.ReactNode;
};

export type WeatherContextType = {
    fetchWeatherData: (city: string, lat: number, lon: number) => void;
    fetchMainData: () => MainDataType | null;
    fetchCurrentData: () => CurrentDataType  | null;
    fetchForecastData: () => ForecastDataType | null;
};
