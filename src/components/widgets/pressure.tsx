interface PressureProps {
    pressure: string;
}

export default function Pressure({ pressure }: PressureProps) {
    return (
        <div id="pressure" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">PRESSURE</h2>
            <p className="text-2xl">{pressure} inHg</p>
        </div>
    );
}
