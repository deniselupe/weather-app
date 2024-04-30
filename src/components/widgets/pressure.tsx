interface PressureProps {
    pressure: string;
}

export default function Pressure({ pressure }: PressureProps) {
    return (
        <div id="pressure" className="h-44 p-8 col-span-1 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">PRESSURE</h2>
            <p className="text-2xl">{pressure} inHg</p>
        </div>
    );
}
