interface WindSpeedProps {
    windSpeed: number;
}

export default function WindSpeed({ windSpeed }: WindSpeedProps) {
    return (
        <div id="wind-speed" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">WIND SPEED</h2>
            <p className="text-2xl">{windSpeed} MPH</p>
        </div>
    );
}
