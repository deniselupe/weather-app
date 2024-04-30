interface SunriseSunsetProps {
    sunrise: string;
    sunset: string;
}

export default function SunriseSunset({ sunrise, sunset }: SunriseSunsetProps) {
    return (
        <div id="sunrise" className="h-44 p-8 col-span-1 grow bg-gray-800 rounded-3xl flex flex-col justify-between">
            <div>
                <h2 className="text-xs">SUNRISE</h2>
                <p className="text-2xl">{sunrise}</p>
            </div>
            <p className="text-xs">Sunset: {sunset}</p>
        </div>
    );
}
