"use client";

import { useState } from "react";
import Image from "next/image";

export default function ForecastCarouselWidget() {
    const [forecastType, setForecastType] = useState<"Daily" | "Hourly">("Daily");
    const [currentPage, setCurrentPage] = useState(0);

    const weatherData = {
        "lat": 38.7273,
        "lon": -90.3832,
        "timezone": "America/Chicago",
        "timezone_offset": -21600,
        "current": {
            "dt": 1706831704,
            "sunrise": 1706792872,
            "sunset": 1706829729,
            "temp": 58.71,
            "feels_like": 57.34,
            "pressure": 1010,
            "humidity": 65,
            "dew_point": 46.99,
            "uvi": 0,
            "clouds": 100,
            "visibility": 10000,
            "wind_speed": 6.02,
            "wind_deg": 216,
            "wind_gust": 13.56,
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ]
        },
        "hourly": [
            {
                "dt": 1706828400,
                "temp": 58.3,
                "feels_like": 56.93,
                "pressure": 1011,
                "humidity": 66,
                "dew_point": 47.01,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 5.55,
                "wind_deg": 217,
                "wind_gust": 7.67,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706832000,
                "temp": 58.71,
                "feels_like": 57.34,
                "pressure": 1010,
                "humidity": 65,
                "dew_point": 46.99,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 6.02,
                "wind_deg": 216,
                "wind_gust": 13.56,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706835600,
                "temp": 57.79,
                "feels_like": 56.43,
                "pressure": 1011,
                "humidity": 67,
                "dew_point": 46.92,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 5.08,
                "wind_deg": 230,
                "wind_gust": 9.13,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706839200,
                "temp": 56.48,
                "feels_like": 55.17,
                "pressure": 1012,
                "humidity": 71,
                "dew_point": 47.21,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 4.85,
                "wind_deg": 228,
                "wind_gust": 8.68,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706842800,
                "temp": 54.91,
                "feels_like": 53.58,
                "pressure": 1012,
                "humidity": 74,
                "dew_point": 46.8,
                "uvi": 0,
                "clouds": 98,
                "visibility": 10000,
                "wind_speed": 4.92,
                "wind_deg": 239,
                "wind_gust": 7.92,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706846400,
                "temp": 52.84,
                "feels_like": 51.58,
                "pressure": 1013,
                "humidity": 80,
                "dew_point": 46.85,
                "uvi": 0,
                "clouds": 92,
                "visibility": 10000,
                "wind_speed": 5.14,
                "wind_deg": 245,
                "wind_gust": 8.72,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706850000,
                "temp": 50.77,
                "feels_like": 49.55,
                "pressure": 1014,
                "humidity": 85,
                "dew_point": 46.47,
                "uvi": 0,
                "clouds": 92,
                "visibility": 10000,
                "wind_speed": 5.55,
                "wind_deg": 260,
                "wind_gust": 11.99,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706853600,
                "temp": 50.05,
                "feels_like": 48.85,
                "pressure": 1015,
                "humidity": 87,
                "dew_point": 46.35,
                "uvi": 0,
                "clouds": 93,
                "visibility": 10000,
                "wind_speed": 4.61,
                "wind_deg": 284,
                "wind_gust": 8.01,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706857200,
                "temp": 49.24,
                "feels_like": 48.2,
                "pressure": 1015,
                "humidity": 88,
                "dew_point": 46.04,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 3.74,
                "wind_deg": 326,
                "wind_gust": 3.89,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706860800,
                "temp": 48.61,
                "feels_like": 48.61,
                "pressure": 1015,
                "humidity": 89,
                "dew_point": 45.75,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.64,
                "wind_deg": 310,
                "wind_gust": 2.8,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706864400,
                "temp": 48.16,
                "feels_like": 48.16,
                "pressure": 1015,
                "humidity": 90,
                "dew_point": 45.48,
                "uvi": 0,
                "clouds": 100,
                "visibility": 10000,
                "wind_speed": 2.46,
                "wind_deg": 296,
                "wind_gust": 2.62,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706868000,
                "temp": 47.71,
                "feels_like": 47.71,
                "pressure": 1015,
                "humidity": 90,
                "dew_point": 45.12,
                "uvi": 0,
                "clouds": 97,
                "visibility": 10000,
                "wind_speed": 2.91,
                "wind_deg": 360,
                "wind_gust": 3.04,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706871600,
                "temp": 46.94,
                "feels_like": 45.25,
                "pressure": 1015,
                "humidity": 91,
                "dew_point": 44.62,
                "uvi": 0,
                "clouds": 83,
                "visibility": 10000,
                "wind_speed": 4.12,
                "wind_deg": 31,
                "wind_gust": 4.18,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706875200,
                "temp": 46,
                "feels_like": 43.29,
                "pressure": 1015,
                "humidity": 92,
                "dew_point": 44.01,
                "uvi": 0,
                "clouds": 71,
                "visibility": 10000,
                "wind_speed": 5.37,
                "wind_deg": 52,
                "wind_gust": 9.42,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706878800,
                "temp": 44.94,
                "feels_like": 41.5,
                "pressure": 1016,
                "humidity": 93,
                "dew_point": 43.29,
                "uvi": 0,
                "clouds": 5,
                "visibility": 10000,
                "wind_speed": 6.24,
                "wind_deg": 71,
                "wind_gust": 14.09,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706882400,
                "temp": 44.69,
                "feels_like": 40.62,
                "pressure": 1017,
                "humidity": 91,
                "dew_point": 42.31,
                "uvi": 0.26,
                "clouds": 5,
                "visibility": 10000,
                "wind_speed": 7.31,
                "wind_deg": 78,
                "wind_gust": 16.28,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706886000,
                "temp": 46.38,
                "feels_like": 42.31,
                "pressure": 1017,
                "humidity": 80,
                "dew_point": 40.82,
                "uvi": 0.79,
                "clouds": 5,
                "visibility": 10000,
                "wind_speed": 8.12,
                "wind_deg": 87,
                "wind_gust": 13.04,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706889600,
                "temp": 48.69,
                "feels_like": 44.87,
                "pressure": 1017,
                "humidity": 71,
                "dew_point": 39.94,
                "uvi": 1.56,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 8.75,
                "wind_deg": 90,
                "wind_gust": 12.41,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706893200,
                "temp": 51.22,
                "feels_like": 49.1,
                "pressure": 1017,
                "humidity": 65,
                "dew_point": 39.78,
                "uvi": 2.24,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 8.93,
                "wind_deg": 93,
                "wind_gust": 12.12,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706896800,
                "temp": 53.49,
                "feels_like": 51.37,
                "pressure": 1017,
                "humidity": 60,
                "dew_point": 40.05,
                "uvi": 2.52,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 8.37,
                "wind_deg": 99,
                "wind_gust": 10.94,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706900400,
                "temp": 55.26,
                "feels_like": 53.17,
                "pressure": 1016,
                "humidity": 57,
                "dew_point": 40.46,
                "uvi": 2.31,
                "clouds": 5,
                "visibility": 10000,
                "wind_speed": 7.92,
                "wind_deg": 102,
                "wind_gust": 9.95,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706904000,
                "temp": 56.5,
                "feels_like": 54.43,
                "pressure": 1015,
                "humidity": 55,
                "dew_point": 40.86,
                "uvi": 1.64,
                "clouds": 5,
                "visibility": 10000,
                "wind_speed": 7.99,
                "wind_deg": 102,
                "wind_gust": 9.73,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706907600,
                "temp": 57,
                "feels_like": 54.99,
                "pressure": 1015,
                "humidity": 55,
                "dew_point": 41.16,
                "uvi": 0.86,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 8.23,
                "wind_deg": 104,
                "wind_gust": 10.07,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706911200,
                "temp": 56.39,
                "feels_like": 54.41,
                "pressure": 1015,
                "humidity": 57,
                "dew_point": 41.45,
                "uvi": 0.3,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 8.5,
                "wind_deg": 103,
                "wind_gust": 10.85,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706914800,
                "temp": 54.52,
                "feels_like": 52.54,
                "pressure": 1015,
                "humidity": 61,
                "dew_point": 41.36,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 8.12,
                "wind_deg": 99,
                "wind_gust": 13.56,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706918400,
                "temp": 52.32,
                "feels_like": 50.27,
                "pressure": 1015,
                "humidity": 64,
                "dew_point": 40.84,
                "uvi": 0,
                "clouds": 4,
                "visibility": 10000,
                "wind_speed": 8.23,
                "wind_deg": 98,
                "wind_gust": 16.82,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706922000,
                "temp": 51.03,
                "feels_like": 48.88,
                "pressure": 1016,
                "humidity": 65,
                "dew_point": 39.85,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 8.59,
                "wind_deg": 99,
                "wind_gust": 18.77,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706925600,
                "temp": 49.78,
                "feels_like": 46.09,
                "pressure": 1016,
                "humidity": 65,
                "dew_point": 38.62,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 9.08,
                "wind_deg": 102,
                "wind_gust": 20.4,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706929200,
                "temp": 48.67,
                "feels_like": 44.64,
                "pressure": 1016,
                "humidity": 66,
                "dew_point": 37.76,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 9.31,
                "wind_deg": 104,
                "wind_gust": 21.45,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706932800,
                "temp": 47.61,
                "feels_like": 43.38,
                "pressure": 1016,
                "humidity": 67,
                "dew_point": 37.33,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 9.15,
                "wind_deg": 105,
                "wind_gust": 22.28,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706936400,
                "temp": 46.69,
                "feels_like": 42.33,
                "pressure": 1016,
                "humidity": 69,
                "dew_point": 37.11,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 8.97,
                "wind_deg": 106,
                "wind_gust": 22.37,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706940000,
                "temp": 45.88,
                "feels_like": 41.4,
                "pressure": 1016,
                "humidity": 70,
                "dew_point": 36.95,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 8.79,
                "wind_deg": 107,
                "wind_gust": 22.37,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706943600,
                "temp": 45.1,
                "feels_like": 40.48,
                "pressure": 1015,
                "humidity": 72,
                "dew_point": 36.73,
                "uvi": 0,
                "clouds": 0,
                "visibility": 10000,
                "wind_speed": 8.75,
                "wind_deg": 107,
                "wind_gust": 22.48,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706947200,
                "temp": 44.4,
                "feels_like": 39.69,
                "pressure": 1015,
                "humidity": 73,
                "dew_point": 36.55,
                "uvi": 0,
                "clouds": 1,
                "visibility": 10000,
                "wind_speed": 8.57,
                "wind_deg": 108,
                "wind_gust": 22.21,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706950800,
                "temp": 43.66,
                "feels_like": 39.02,
                "pressure": 1015,
                "humidity": 75,
                "dew_point": 36.5,
                "uvi": 0,
                "clouds": 2,
                "visibility": 10000,
                "wind_speed": 8.08,
                "wind_deg": 111,
                "wind_gust": 21.5,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706954400,
                "temp": 43.09,
                "feels_like": 38.08,
                "pressure": 1015,
                "humidity": 77,
                "dew_point": 36.55,
                "uvi": 0,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 8.57,
                "wind_deg": 106,
                "wind_gust": 21.97,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706958000,
                "temp": 42.42,
                "feels_like": 36.97,
                "pressure": 1015,
                "humidity": 80,
                "dew_point": 36.66,
                "uvi": 0,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 9.22,
                "wind_deg": 106,
                "wind_gust": 23.11,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706961600,
                "temp": 41.86,
                "feels_like": 36.23,
                "pressure": 1014,
                "humidity": 81,
                "dew_point": 36.48,
                "uvi": 0,
                "clouds": 3,
                "visibility": 10000,
                "wind_speed": 9.33,
                "wind_deg": 103,
                "wind_gust": 23.53,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706965200,
                "temp": 41.41,
                "feels_like": 35.82,
                "pressure": 1015,
                "humidity": 80,
                "dew_point": 35.87,
                "uvi": 0,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 9.01,
                "wind_deg": 111,
                "wind_gust": 24.05,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706968800,
                "temp": 41.83,
                "feels_like": 36.36,
                "pressure": 1016,
                "humidity": 78,
                "dew_point": 35.35,
                "uvi": 0.3,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 8.95,
                "wind_deg": 113,
                "wind_gust": 23.58,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706972400,
                "temp": 43.68,
                "feels_like": 37.69,
                "pressure": 1015,
                "humidity": 70,
                "dew_point": 34.74,
                "uvi": 0.88,
                "clouds": 7,
                "visibility": 10000,
                "wind_speed": 11.36,
                "wind_deg": 111,
                "wind_gust": 21.05,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706976000,
                "temp": 46.47,
                "feels_like": 41.27,
                "pressure": 1015,
                "humidity": 62,
                "dew_point": 34.43,
                "uvi": 1.73,
                "clouds": 6,
                "visibility": 10000,
                "wind_speed": 11.12,
                "wind_deg": 122,
                "wind_gust": 19.1,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706979600,
                "temp": 49.23,
                "feels_like": 44.53,
                "pressure": 1015,
                "humidity": 56,
                "dew_point": 34.09,
                "uvi": 2.45,
                "clouds": 8,
                "visibility": 10000,
                "wind_speed": 11.74,
                "wind_deg": 118,
                "wind_gust": 18.9,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706983200,
                "temp": 51.73,
                "feels_like": 48.96,
                "pressure": 1013,
                "humidity": 50,
                "dew_point": 33.66,
                "uvi": 2.73,
                "clouds": 9,
                "visibility": 10000,
                "wind_speed": 12.15,
                "wind_deg": 110,
                "wind_gust": 18.16,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706986800,
                "temp": 53.92,
                "feels_like": 51.13,
                "pressure": 1013,
                "humidity": 45,
                "dew_point": 33.19,
                "uvi": 2.46,
                "clouds": 54,
                "visibility": 10000,
                "wind_speed": 11.74,
                "wind_deg": 130,
                "wind_gust": 17.31,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706990400,
                "temp": 54.97,
                "feels_like": 52.18,
                "pressure": 1011,
                "humidity": 43,
                "dew_point": 32.85,
                "uvi": 1.74,
                "clouds": 71,
                "visibility": 10000,
                "wind_speed": 12.28,
                "wind_deg": 107,
                "wind_gust": 17.16,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706994000,
                "temp": 55.29,
                "feels_like": 52.5,
                "pressure": 1011,
                "humidity": 42,
                "dew_point": 32.43,
                "uvi": 0.87,
                "clouds": 80,
                "visibility": 10000,
                "wind_speed": 12.26,
                "wind_deg": 112,
                "wind_gust": 17.4,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            },
            {
                "dt": 1706997600,
                "temp": 54.77,
                "feels_like": 51.96,
                "pressure": 1011,
                "humidity": 43,
                "dew_point": 32.83,
                "uvi": 0.3,
                "clouds": 84,
                "visibility": 10000,
                "wind_speed": 11.01,
                "wind_deg": 115,
                "wind_gust": 17.94,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "pop": 0
            }
        ],
        "daily": [
            {
                "dt": 1706810400,
                "sunrise": 1706792872,
                "sunset": 1706829729,
                "moonrise": 0,
                "moonset": 1706804340,
                "moon_phase": 0.71,
                "summary": "There will be clear sky until morning, then partly cloudy",
                "temp": {
                    "day": 55.98,
                    "min": 42.17,
                    "max": 59.09,
                    "night": 50.77,
                    "eve": 58.71,
                    "morn": 42.17
                },
                "feels_like": {
                    "day": 54.05,
                    "night": 49.55,
                    "eve": 57.34,
                    "morn": 38.61
                },
                "pressure": 1015,
                "humidity": 59,
                "dew_point": 41.85,
                "wind_speed": 8.21,
                "wind_deg": 215,
                "wind_gust": 25.77,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 94,
                "pop": 0,
                "uvi": 1.77
            },
            {
                "dt": 1706896800,
                "sunrise": 1706879219,
                "sunset": 1706916199,
                "moonrise": 1706854200,
                "moonset": 1706892240,
                "moon_phase": 0.75,
                "summary": "The day will start with partly cloudy through the late morning hours, transitioning to clearing",
                "temp": {
                    "day": 53.49,
                    "min": 44.69,
                    "max": 57,
                    "night": 46.69,
                    "eve": 52.32,
                    "morn": 46
                },
                "feels_like": {
                    "day": 51.37,
                    "night": 42.33,
                    "eve": 50.27,
                    "morn": 43.29
                },
                "pressure": 1017,
                "humidity": 60,
                "dew_point": 40.05,
                "wind_speed": 9.31,
                "wind_deg": 104,
                "wind_gust": 22.37,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 6,
                "pop": 0,
                "uvi": 2.52
            },
            {
                "dt": 1706983200,
                "sunrise": 1706965565,
                "sunset": 1707002669,
                "moonrise": 1706944500,
                "moonset": 1706980380,
                "moon_phase": 0.78,
                "summary": "You can expect clear sky in the morning, with partly cloudy in the afternoon",
                "temp": {
                    "day": 51.73,
                    "min": 41.41,
                    "max": 55.29,
                    "night": 45.01,
                    "eve": 50.43,
                    "morn": 41.86
                },
                "feels_like": {
                    "day": 48.96,
                    "night": 40.26,
                    "eve": 47.62,
                    "morn": 36.23
                },
                "pressure": 1013,
                "humidity": 50,
                "dew_point": 33.66,
                "wind_speed": 12.28,
                "wind_deg": 107,
                "wind_gust": 25.28,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 9,
                "pop": 0,
                "uvi": 2.73
            },
            {
                "dt": 1707069600,
                "sunrise": 1707051909,
                "sunset": 1707089139,
                "moonrise": 1707034860,
                "moonset": 1707068940,
                "moon_phase": 0.81,
                "summary": "There will be partly cloudy today",
                "temp": {
                    "day": 48.11,
                    "min": 41.59,
                    "max": 50.85,
                    "night": 44.92,
                    "eve": 47.79,
                    "morn": 41.59
                },
                "feels_like": {
                    "day": 43.84,
                    "night": 41.18,
                    "eve": 44.31,
                    "morn": 36.18
                },
                "pressure": 1012,
                "humidity": 58,
                "dew_point": 34.2,
                "wind_speed": 10.18,
                "wind_deg": 86,
                "wind_gust": 23.91,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 100,
                "pop": 0,
                "uvi": 1.84
            },
            {
                "dt": 1707156000,
                "sunrise": 1707138252,
                "sunset": 1707175609,
                "moonrise": 1707125400,
                "moonset": 1707158040,
                "moon_phase": 0.84,
                "summary": "There will be partly cloudy today",
                "temp": {
                    "day": 48.78,
                    "min": 37.18,
                    "max": 52,
                    "night": 42.89,
                    "eve": 46.65,
                    "morn": 37.18
                },
                "feels_like": {
                    "day": 44.91,
                    "night": 40.03,
                    "eve": 43.48,
                    "morn": 32.04
                },
                "pressure": 1020,
                "humidity": 38,
                "dew_point": 24.1,
                "wind_speed": 9.13,
                "wind_deg": 360,
                "wind_gust": 16.73,
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 68,
                "pop": 0,
                "uvi": 2.65
            },
            {
                "dt": 1707242400,
                "sunrise": 1707224593,
                "sunset": 1707262078,
                "moonrise": 1707215760,
                "moonset": 1707247920,
                "moon_phase": 0.88,
                "summary": "Expect a day of partly cloudy with clear spells",
                "temp": {
                    "day": 49.15,
                    "min": 38.19,
                    "max": 53.04,
                    "night": 46.15,
                    "eve": 49.41,
                    "morn": 38.19
                },
                "feels_like": {
                    "day": 48.49,
                    "night": 43.52,
                    "eve": 47.71,
                    "morn": 36
                },
                "pressure": 1022,
                "humidity": 42,
                "dew_point": 27.19,
                "wind_speed": 5.26,
                "wind_deg": 133,
                "wind_gust": 10.58,
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": 5,
                "pop": 0,
                "uvi": 3
            },
            {
                "dt": 1707328800,
                "sunrise": 1707310932,
                "sunset": 1707348548,
                "moonrise": 1707305820,
                "moonset": 1707338460,
                "moon_phase": 0.91,
                "summary": "There will be partly cloudy today",
                "temp": {
                    "day": 51.87,
                    "min": 42.33,
                    "max": 54.82,
                    "night": 49.33,
                    "eve": 51.28,
                    "morn": 42.44
                },
                "feels_like": {
                    "day": 48.97,
                    "night": 45.12,
                    "eve": 48.69,
                    "morn": 38.66
                },
                "pressure": 1018,
                "humidity": 47,
                "dew_point": 32.7,
                "wind_speed": 10.63,
                "wind_deg": 143,
                "wind_gust": 25.79,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 100,
                "pop": 0,
                "uvi": 3
            },
            {
                "dt": 1707415200,
                "sunrise": 1707397271,
                "sunset": 1707435018,
                "moonrise": 1707395280,
                "moonset": 1707429540,
                "moon_phase": 0.95,
                "summary": "You can expect partly cloudy in the morning, with clearing in the afternoon",
                "temp": {
                    "day": 58.1,
                    "min": 47.37,
                    "max": 58.78,
                    "night": 55.53,
                    "eve": 57.42,
                    "morn": 48.45
                },
                "feels_like": {
                    "day": 56.8,
                    "night": 54.39,
                    "eve": 56.34,
                    "morn": 43.7
                },
                "pressure": 1010,
                "humidity": 68,
                "dew_point": 47.79,
                "wind_speed": 16.82,
                "wind_deg": 178,
                "wind_gust": 37.18,
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04d"
                    }
                ],
                "clouds": 100,
                "pop": 0.02,
                "uvi": 3
            }
        ]
    };

    const itemsPerPage = 8;
    const totalPages = Math.ceil(weatherData.hourly.length / itemsPerPage);
    const hourlyOptions: Intl.DateTimeFormatOptions = { hour: "numeric", hour12: true };
    const dailyOptions: Intl.DateTimeFormatOptions = { weekday: "short" };

    const renderHourlyForecast = () => {
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex +  itemsPerPage;
        const currentHourlyData = weatherData.hourly.slice(startIndex, endIndex);

        return currentHourlyData.map((hour, index) => (
            <div key={index} id="hourly-forecast-item" className="w-28 h-32 grow p-4">
                <Image 
                    src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`} 
                    alt={hour.weather[0].description} 
                    width={50}
                    height={50}
                />
                <p>{new Date(hour.dt * 1000).toLocaleTimeString("en", hourlyOptions)}</p>
                <p>{Math.round(hour.temp)}°F</p>
            </div>
        ));
    };

    const renderDailyForecast = () => {
        return weatherData.daily.map((day, index) => (
            <div key={index} id="daily-forecast-item" className="w-28 h-32 grow p-4">
                <Image 
                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`} 
                    alt={day.weather[0].description}
                    width={50}
                    height={50}
                />
                <p>{new Date(day.dt * 1000).toLocaleDateString("en-US", dailyOptions)}</p>
                <p>H: {Math.round(day.temp.max)}° L: {Math.round(day.temp.max)}°</p>
            </div>
        ));
    };

    const handlePageChange = (direction: "prev" | "next") => {
        if (direction === "prev" && currentPage > 0) {
            setCurrentPage(currentPage - 1);
        } else if (direction === "next" && currentPage  < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleForecastChange = (type: "Daily" | "Hourly") => {
        setForecastType(type);
    };

    return (
        <div id="forecast-carousel" className="p-4 text-white bg-gray-800 rounded-xl">
            <div id="carousel-header" className="mb-4 flex gap-4">
                <div id="forecast-toggle" className="flex">
                    <button 
                        onClick={() => handleForecastChange("Daily")}
                        className={`w-20 h-12 mr-4 px-4 ${forecastType === "Daily" && "border"} rounded`}
                    >
                        Daily
                    </button>
                    <button 
                        onClick={() => handleForecastChange("Hourly")}
                        className={`w-20 h-12 px-4 ${forecastType === "Hourly" && "border"} rounded`}
                    >
                        Hourly
                    </button>
                </div>
                {
                    forecastType === "Hourly"
                    &&
                    <div id="pagination-buttons" className="flex">
                        <button 
                            className={`w-12 h-12 mr-4 px-4 text-3xl ${currentPage === 0 && "text-gray-600"} rounded`}
                            onClick={() => handlePageChange('prev')}
                            disabled={currentPage === 0}
                        >
                            {'<'}
                        </button>
                        <button 
                            className={`w-12 h-12 px-4 text-3xl ${currentPage === totalPages - 1 && "text-gray-600"} rounded`}
                            onClick={() => handlePageChange('next')}
                            disabled={currentPage === totalPages - 1}
                        >
                            {'>'}
                        </button>
                    </div>
                }
            </div>
            <div id="forecast" className="flex flex-wrap">
                {
                    forecastType === "Daily"
                    ?
                    renderDailyForecast()
                    :
                    renderHourlyForecast()
                }
            </div>
        </div>
    );
};