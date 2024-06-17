import VisibilityIcon from "@/public/svgs/visibility.svg";

interface VisibilityProps {
    visibility: number;
}

export default function Visibility({ visibility }: VisibilityProps) {
    const visibilityDescription = () => {
        if (visibility >= 10) {
            return "It's perfectly clear right now.";
        } else if (visibility >= 5) {
            return "Good visibility.";
        } else {
            return "Poor visibility. Exercise caution while driving or moving around.";
        }
    };

    return (
        <div id="visibility" className="min-w-32 min-h-32 p-6 flex flex-col justify-between bg-neutral-900 rounded-2xl">
            <div className="flex items-center gap-2">
                <VisibilityIcon className="w-4 h-4" />
                <h2 className="text-xs">VISIBILITY</h2>
            </div>
            <p className="text-2xl">{visibility / 1000} km</p>
            <p className="text-xs">{visibilityDescription()}</p>
        </div>
    );
}
