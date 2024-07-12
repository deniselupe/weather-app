export async function GET() {
    const MAPBOX_TOKEN = process.env.MAPBOX_API_KEY;
    const OPENWEATHERMAP_TOKEN = process.env.PUBLIC_WEATHER_API_KEY;

    return Response.json({MAPBOX_TOKEN, OPENWEATHERMAP_TOKEN});
}
