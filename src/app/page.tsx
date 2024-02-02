import Header from "@/components/header";
import Footer  from "@/components/footer";
import MainWeatherWidget from "@/components/widgets/main-data";
import CurrentWeatherWidget from "@/components/widgets/current-data";
import ForecastCarouselWidget from "@/components/widgets/forecast-data";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Header />
      <div className="w-5/6 md:w-3/4 mx-auto flex-1 flex flex-col justify-around">
        <div id="current-data" className="mb-4 flex flex-col md:flex-row md:justify-between md:items-end">
          <MainWeatherWidget />
          <CurrentWeatherWidget />
        </div>
        <div id="forecast-data">
          <ForecastCarouselWidget />
        </div>
      </div>
      <Footer />
    </div>
  );
}
