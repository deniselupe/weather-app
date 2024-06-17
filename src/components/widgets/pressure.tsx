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
        <div id="pressure" className="min-w-32 min-h-32 p-6 flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-2xl">
            <div className="flex items-center gap-2">
                <PressureIcon className="w-4 h-4" />
                <h2 className="text-xs">PRESSURE</h2>
            </div>
            <p className="text-2xl">{pressure} hPa</p>
            <p className="text-xs">{pressureDescription()}</p>
        </div>
    );
}
