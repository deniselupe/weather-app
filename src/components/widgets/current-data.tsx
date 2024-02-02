"use client";

export default function CurrentWeatherWidget() {
    return (
        <div className="md:min-w-[420px] mb-2 flex flex-wrap justify-around md:grid md:grid-rows-2 md:grid-cols-3 gap-4 text-white">
            <div id="feels-like" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                <h2 className="text-xs">FEELS LIKE</h2>
                <p className="text-3xl">40°</p>
            </div>
            <div id="humidity" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                <h2 className="text-xs">HUMIDITY</h2>
                <p className="text-3xl">40°</p>
            </div>
            <div id="pressure" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                <h2 className="text-xs">PRESSURE</h2>
                <p className="text-3xl">40°</p>
            </div>
            <div id="sunrise" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                <h2 className="text-xs">SUNRISE</h2>
                <p className="text-2xl">7:06 AM</p>
                <p className="mt-6 text-xs">Sunset: 5:42 PM</p>
            </div>
            <div id="wind-speed" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                <h2 className="text-xs">WIND SPEED</h2>
                <p className="text-3xl">40°</p>
            </div>
            <div id="uv-index" className="w-32 h-32 p-4 bg-gray-800 rounded-3xl">
                <h2 className="text-xs">UV INDEX</h2>
                <p className="text-3xl">40°</p>
            </div>
        </div>
    );
}