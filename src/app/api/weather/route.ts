import { type NextRequest } from "next/server";
import { WeatherContextAPI } from "@/types/weather";

export async function GET(req: NextRequest) {
    const url = process.env.CURRENT_WEATHER_URL;
    const key = process.env.WEATHER_API_KEY; 
    const searchParams = req.nextUrl.searchParams;
    const latitude = searchParams.get("lat") as string;
    const longitude = searchParams.get("lon") as string;

    const currentWeatherResponse = await fetch(`${url}?lat=${latitude}&lon=${longitude}&exclude=minutely,alerts&units=imperial&appid=${key}`);

    if (currentWeatherResponse.status !== 200) {
        return Response.json({ error: "Something went wrong with the request." }, { status: 400 });
    } else {
        const currentWeatherData: WeatherContextAPI.WeatherDataObjType = await currentWeatherResponse.json();
        return Response.json(currentWeatherData);
    }
}
