interface FeelsLikeProps {
    feelsLike: number;
}

export default function FeelsLike({ feelsLike }: FeelsLikeProps) {
    return (
        <div id="feels-like" className="h-44 p-8 col-span-1 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">FEELS LIKE</h2>
            <p className="text-2xl">{feelsLike}°</p>
        </div>
    );
}
