import Header from "@/components/header";
import Footer  from "@/components/footer";
import MainWeatherWidget from "@/components/widgets/main-data";
import CurrentWeatherWidget from "@/components/widgets/current-data";
import DailyForecast from "@/components/widgets/daily-forecast";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col gap-10 bg-gray-900">
      <Header />
      <div className="w-5/6 md:w-3/4 mx-auto flex-1 flex flex-col">
        <div id="current-data" className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
          <div className="min-w-64 space-y-4">
            <MainWeatherWidget />
            <DailyForecast />
          </div>
          <CurrentWeatherWidget />
        </div>
      </div>
      <Footer />
    </div>
  );
}
