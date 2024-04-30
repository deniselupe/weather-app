import AirPollutionIcon from "@/public/svgs/air-pollution.svg";

export default function AirPollution() {
    /*
        <p>
          {airQuality.main.aqi < 50
            ? "Air quality is good."
            : airQuality.main.aqi < 100
            ? "Air quality is moderate."
            : airQuality.main.aqi < 150
            ? "Air quality is unhealthy for sensitive groups."
            : airQuality.main.aqi < 200
            ? "Air quality is unhealthy."
            : airQuality.main.aqi < 300
            ? "Air quality is very unhealthy."
            : "Air quality is hazardous."}
        </p>
    */
    return (
        <div id="air-pollution" className="h-32 p-4 space-y-6 grow col-span-2 bg-gray-800 rounded-3xl">
            <div className="flex items-center gap-2">
                <AirPollutionIcon className="w-4 h-4" />
                <h2 className="text-xs">UV INDEX</h2>
            </div>
            <div
                id="progress-bar-outer"
                className="relative h-2 rounded-full"
                style={{
                    background: "linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)"
                }}
            >
                <div
                    id="progress-bar-inner"
                    style={{ width: `${Math.round((2 / 10) * 100)}%` }}
                    className={`h-2 rounded-full`}
                />
                <div
                    className="absolute top-0 w-2 h-2 rounded-full bg-white ring-1 ring-black"
                    style={{
                        left: `${Math.round((2 / 10) * 100)}%`,
                    }}
                />
            </div>
            <p className="text-md">
                Air quality is good.
            </p>
        </div>
    );
}
