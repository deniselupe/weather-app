interface FeelsLikeProps {
    feelsLike: number;
}

export default function FeelsLike({ feelsLike }: FeelsLikeProps) {
    return (
        <div id="feels-like" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">FEELS LIKE</h2>
            <p className="text-2xl">{feelsLike}°</p>
        </div>
    );
}
