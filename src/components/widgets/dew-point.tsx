interface DrewPointProps {
    dewPoint: number;
}

export default function DewPoint({ dewPoint }: DrewPointProps) {
    return (
        <div id="dew-point" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">DEW POINT</h2>
            <p className="text-2xl">{dewPoint}°F</p>
        </div>
    );
}
