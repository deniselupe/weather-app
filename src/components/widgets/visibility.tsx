interface VisibilityProps {
    visibility: number;
}

export default function Visibility({ visibility }: VisibilityProps) {
    return (
        <div id="visibility" className="w-32 h-32 p-4 grow bg-gray-800 rounded-3xl">
            <h2 className="text-xs">VISIBILITY</h2>
            <p className="text-2xl">{visibility / 1000} km</p>
        </div>
    );
}
