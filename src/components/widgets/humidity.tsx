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
        <div id="humidity" className="min-w-32 min-h-32 p-6 flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-2xl">
            <div className="flex items-center gap-2">
                <HumidityIcon className="w-4 h-4" />
                <h2 className="text-xs">HUMIDITY</h2>
            </div>
            <p className="text-2xl">{humidity}%</p>
            <p className="text-xs">{humidityDescription()}</p>
        </div>
    );
}
