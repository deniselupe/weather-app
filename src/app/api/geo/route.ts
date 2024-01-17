import { type NextRequest } from "next/server";
import { LocationsType } from "@/types/weather/geolocation";

export async function GET(req: NextRequest) {
    const url = process.env.GEOCODE_URL;
    const key = process.env.WEATHER_API_KEY; 
    const searchParams = req.nextUrl.searchParams;
    const location = searchParams.get("loc") as string;
    const geoLocationResponse = await fetch(`${url}?q=${location}&limit=10&appid=${key}`);

    if (geoLocationResponse.status !== 200) {
        return Response.json([]);
    } else {
        const geoLocationData: LocationsType = await geoLocationResponse.json();
        return Response.json(geoLocationData);
    }
}