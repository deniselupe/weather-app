import HumidityIcon from "@/public/svgs/humidity.svg";

interface HumidityProps {
    humidity: number;
}

export default function Humidity({ humidity }: HumidityProps) {
    const humidityDescription = () => {
        if (humidity < 40) {
            return "Low humidity. It might feel dry.";
        } else if (humidity < 70) {
            return "Moderate humidity. Comfortable conditions.";
        } else {
            return "High humidity. It might feel humid and uncomfortable.";
        }
    };
    return (
        <div id="humidity" className="h-44 p-8 col-span-1 grow flex flex-col justify-between bg-gray-800 rounded-3xl">
            <div className="flex items-center gap-2">
                <HumidityIcon className="w-4 h-4" />
                <h2 className="text-xs">HUMIDITY</h2>
            </div>
            <p className="text-2xl">{humidity}%</p>
            <p className="text-xs">{humidityDescription()}</p>
        </div>
    );
}
