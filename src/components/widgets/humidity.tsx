interface HumidityProps {
    humidity: number;
}

export default function Humidity({ humidity }: HumidityProps) {
    return (
        <div id="humidity" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">HUMIDITY</h2>
            <p className="text-2xl">{humidity}%</p>
        </div>
    );
}
