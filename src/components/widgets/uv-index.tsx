interface UVIndexProps {
    uvIndex: number;
}

export default function UVIndex({ uvIndex }: UVIndexProps) {
    const uviDescription = () => {
        if (uvIndex <= 2) {
            return "Low";
        } else if (uvIndex <= 5) {
            return "Moderate";
        } else if (uvIndex <= 7) {
            return "High";
        } else {
            return "Very High";
        }
    };

    const uviInstructions = () => {
        if (uvIndex <= 2) {
            return "No protection needed.";
        } else if (uvIndex <= 5) {
            return "Wear sunscreen.";
        } else {
            return "Take precautions";
        }
    };

    return (
        <div id="uv-index" className="w-32 h-32 space-y-1.5 p-4 grow bg-gray-800 rounded-3xl">
            <div>
                <h2 className="text-xs mb-1">UV INDEX</h2>
                <p className="text-xs">{uvIndex}</p>
                <p className="text-xs">{uviDescription()}</p>
            </div>
            <div
                id="progress-bar-outer"
                className="relative h-1 rounded-full"
                style={{
                    background: "linear-gradient(90deg, rgba(58,110,180,1) 0%, rgba(126,212,87,1) 20%, rgba(248,212,73,1) 40%, rgba(235,77,96,1) 60%, rgba(180,96,231,1) 80%, rgba(178,34,34,1) 100%)"
                }}
            >
                <div
                    id="progress-bar-inner"
                    style={{ width: `${Math.round((uvIndex / 10) * 100)}%` }}
                    className={`h-1 rounded-full`}
                />
                <div
                    className="absolute top-0 w-1.5 h-1.5 rounded-full bg-white ring-1 ring-black transform -translate-y-[1px]"
                    style={{
                        left: `${Math.round((uvIndex / 10) * 100)}%`,
                    }}
                />
            </div>
            <p className="text-xs">
                {uviInstructions()}
            </p>
        </div>
    );
}
