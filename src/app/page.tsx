import Header from "@/components/header";
import MainWeatherWidget from "@/components/widgets/main-data";

export default function Home() {
  return (
    <div className="h-screen flex flex-col bg-gray-900">
      <Header />
      <div className="w-5/6 md:w-3/4 mx-auto flex-1 border">
        <div id="current">
          <MainWeatherWidget />
        </div>
        <div id="forecast"></div>
      </div>
    </div>
  );
}
