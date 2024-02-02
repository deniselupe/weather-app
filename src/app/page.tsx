import Header from "@/components/header";
import MainWeatherWidget from "@/components/widgets/main-data";
import CurrentWeatherWidget from "@/components/widgets/current-data";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Header />
      <div className="w-5/6 md:w-3/4 mx-auto flex-1">
        <div id="current-data" className="flex flex-col md:flex-row md:justify-between md:items-end">
          <MainWeatherWidget />
          <CurrentWeatherWidget />
        </div>
        <div id="forecast-data">
        </div>
      </div>
    </div>
  );
}
