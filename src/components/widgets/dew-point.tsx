interface DrewPointProps {
    dewPoint: number;
}

export default function DewPoint({ dewPoint }: DrewPointProps) {
    return (
        <div id="dew-point" className="h-44 p-8 col-span-1 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">DEW POINT</h2>
            <p className="text-2xl">{dewPoint}°F</p>
        </div>
    );
}
