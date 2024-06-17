import DewPointIcon from "@/public/svgs/dew-point.svg";

interface DrewPointProps {
    dewPoint: number;
}

export default function DewPoint({ dewPoint }: DrewPointProps) {
    const dewPointDescription = () => {
        if (dewPoint < 55) {
            return "Very dry and comfortable.";
        } else if (dewPoint < 65) {
            return "Somewhat humid.";
        } else {
            return "Very humid.";
        }
    };

    return (
        <div id="dew-point" className="min-w-32 min-h-32 p-6 flex flex-col justify-between bg-neutral-900 border border-neutral-800 rounded-2xl">
            <div className="flex items-center gap-2">
                <DewPointIcon className="w-4 h-4" />
                <h2 className="text-xs">DEW POINT</h2>
            </div>
            <p className="text-xl">{dewPoint}°F</p>
            <p className="text-xs">{dewPointDescription()}</p>
        </div>
    );
}
