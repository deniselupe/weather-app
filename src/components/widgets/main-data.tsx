"use client";

export default function MainWeatherWidget() {
    return (
        <div className="md:w-96 md:h-96 mb-2 bg-gray-800 text-white flex flex-col items-center justify-center">
            <h2 className="text-xl">My Location</h2>
            <p className="text-xs">City, State</p>
            <h1 className="text-6xl">63°</h1>
            <p>Cloudy</p>
            <p>High: 63° Low: 38°</p>
        </div>
    );
}