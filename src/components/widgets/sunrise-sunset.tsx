import SunriseSunsetIcon from "@/public/svgs/sunrise-sunset.svg";

interface SunriseSunsetProps {
    sunrise: string;
    sunset: string;
}

export default function SunriseSunset({ sunrise, sunset }: SunriseSunsetProps) {
    return (
        <div id="sunrise" className="h-44 p-8 col-span-1 grow flex flex-col justify-between bg-gray-800 rounded-3xl">
            <div className="flex items-center gap-2">
                <SunriseSunsetIcon className="w-4 h-4" />
                <h2 className="text-xs">SUNRISE</h2>
            </div>
            <p className="text-2xl">{sunrise}</p>
            <p className="text-xs">Sunset: {sunset}</p>
        </div>
    );
}
