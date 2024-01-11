import Header from "@/components/header";

export default function Home() {
  return (
    <div className="h-screen">
      <Header />
      <div className="w-5/6 md:w-3/4 mx-auto border border-black">
        <div id="current"></div>
        <div id="forecast"></div>
      </div>
    </div>
  );
}
