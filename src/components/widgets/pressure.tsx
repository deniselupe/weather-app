import PressureIcon from "@/public/svgs/pressure.svg";

interface PressureProps {
    pressure: number;
}

export default function Pressure({ pressure }: PressureProps) {
    const pressureDescription = () => {
        if (pressure < 1000) {
            return "Low pressure. Expect changes in the weather.";
        } else if (pressure >= 1000 && pressure <= 1010) {
            return "Normal pressure. Typical weather conditions.";
        } else {
            return "High pressure. Expect stable and clear weather.";
        }
    };
    
    return (
        <div id="pressure" className="h-44 p-8 col-span-1 grow flex flex-col justify-between bg-gray-800 rounded-3xl">
            <div className="flex items-center gap-2">
                <PressureIcon className="w-4 h-4" />
                <h2 className="text-xs">PRESSURE</h2>
            </div>
            <p className="text-2xl">{pressure} hPa</p>
            <p className="text-xs">{pressureDescription()}</p>
        </div>
    );
}
