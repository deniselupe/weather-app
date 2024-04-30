interface HumidityProps {
    humidity: number;
}

export default function Humidity({ humidity }: HumidityProps) {
    return (
        <div id="humidity" className="h-44 p-8 col-span-1 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">HUMIDITY</h2>
            <p className="text-2xl">{humidity}%</p>
        </div>
    );
}
