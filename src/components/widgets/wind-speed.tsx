interface WindSpeedProps {
    windSpeed: number;
}

export default function WindSpeed({ windSpeed }: WindSpeedProps) {
    return (
        <div id="wind-speed" className="h-44 p-8 col-span-1 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">WIND SPEED</h2>
            <p className="text-2xl">{windSpeed} MPH</p>
        </div>
    );
}
