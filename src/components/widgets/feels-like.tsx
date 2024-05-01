import FeelsLikeIcon from "@/public/svgs/feels-like.svg";

interface FeelsLikeProps {
    feelsLike: number;
    mainTemp: number;
}

export default function FeelsLike({ feelsLike, mainTemp }: FeelsLikeProps) {
    const feelsLikeDescription = () => {
        if (feelsLike < mainTemp) {
            return "Feels colder than the actual temperature.";
        } else if (feelsLike > mainTemp) {
            return "Feels warmer than the actual temperature";
        } else {
            return "Feels like the actual temperature.";
        }
    };

    return (
        <div id="feels-like" className="h-44 p-8 col-span-1 grow flex flex-col justify-between bg-gray-800 rounded-3xl">
            <div className="flex items-center gap-2">
                <FeelsLikeIcon className="w-4 h-4" />
                <h2 className="text-xs">FEELS LIKE</h2>    
            </div>
            <p className="text-2xl">{feelsLike}°</p>
            <p className="text-xs">{feelsLikeDescription()}</p>
        </div>
    );
}
