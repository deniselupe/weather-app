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
        <div id="dew-point" className="h-44 p-8 col-span-1 grow flex flex-col justify-between bg-gray-800 rounded-3xl">
            <div className="flex items-center gap-2">
                <DewPointIcon className="w-4 h-4" />
                <h2 className="text-xs">DEW POINT</h2>
            </div>
            <p className="text-2xl">{dewPoint}°F</p>
            <p className="text-xs">{dewPointDescription()}</p>
        </div>
    );
}
