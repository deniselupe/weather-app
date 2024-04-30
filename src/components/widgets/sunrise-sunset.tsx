interface SunriseSunsetProps {
    sunrise: string;
    sunset: string;
}

export default function SunriseSunset({ sunrise, sunset }: SunriseSunsetProps) {
    return (
        <div id="sunrise" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl flex flex-col justify-between">
            <div>
                <h2 className="text-xs">SUNRISE</h2>
                <p className="text-2xl">{sunrise}</p>
            </div>
            <p className="text-xs">Sunset: {sunset}</p>
        </div>
    );
}
