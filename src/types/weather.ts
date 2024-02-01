type CoordinateType = {
    lon: number;
    lat: number;
};

type WeatherConditionType = {
    id: number;
    main: string;
    description: string;
    icon: string;
};

type WeatherMainType = {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
};

type WindType = {
    speed: number;
    deg: number;
    gust?: number;
};

type RainType = {
    "1h": number;
    "3h": number;
};

type CloudsType = {
    all: number;
};

type SnowType = {
    "1h": number;
    "3h": number;
};

type SystemType = {
    type: number;
    id: number;
    message: string;
    country: string;
    sunrise: number;
    sunset: number;
};

type MainWidgetDataType = {
    location: string;
    currTemp: number;
    description: string;
    minTemp: number;
    maxTemp: number;
};

export type CurrentWeatherObjType = {
    coord: CoordinateType;
    weather: WeatherConditionType[];
    base: string;
    main: WeatherMainType;
    visibility: number;
    wind: WindType;
    rain?: Partial<RainType>;
    clouds: CloudsType;
    snow?: Partial<SnowType>;
    dt: number;
    sys: Partial<SystemType>;
    timezone: number;
    id: number;
    name: string;
    cod: number;
};

export type CurrentWeatherType = CurrentWeatherObjType | {};

export type WeatherProviderProps = {
    children: React.ReactNode;
};

export type WeatherContextType = {
    fetchCurrentWeather: (lat: number, lon: number) => void;
    fetchMainWidgetData: () => MainWidgetDataType | null;
};
