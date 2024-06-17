import Header from "@/components/header";
import Footer  from "@/components/footer";
import MainWeatherWidget from "@/components/widgets/main-data";
import DailyForecast from "@/components/widgets/daily-forecast";
import CurrentWeatherWidget from "@/components/widgets/current-data";
import MapBox from "@/components/widgets/mapbox";
import LargeCities from "@/components/widgets/large-cities";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="w-full sm:w-3/4 px-2 mx-auto flex-1">
        <div className="grid lg:grid-rows-3 lg:grid-cols-3 xl:grid-rows-4 xl:grid-cols-4 gap-2">
          <div className="lg:row-span-3 lg:col-span-1 xl:row-span-4 flex flex-col gap-2">
            <MainWeatherWidget />
            <DailyForecast />
          </div>
          <CurrentWeatherWidget />
          <div className="lg:row-span-1 lg:col-span-2 xl:row-span-2 xl:col-span-3 flex flex-col lg:flex-row lg:justify-between gap-2">
            <MapBox />
            <LargeCities />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
