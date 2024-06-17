import { type NextRequest } from "next/server";
import { AirPollutionResponse } from "@/types/air";

export async function GET(req: NextRequest) {
    const url = process.env.AIR_POLLUTION_URL;
    const key = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
    const searchParams = req.nextUrl.searchParams;
    const latitude = searchParams.get("lat") as string;
    const longitude = searchParams.get("lon") as string;
    
    const airPollutionResponse = await fetch(`${url}?lat=${latitude}&lon=${longitude}&appid=${key}`, {
        cache: "no-store"
    });

    if (airPollutionResponse.status !== 200) {
        return Response.json({ error: "Something went wrong when fetching air pollution data."}, { status: 400 });
    } else {
        const airPollutionData: AirPollutionResponse = await airPollutionResponse.json();

        return Response.json(airPollutionData.list[0]);
    }
}
