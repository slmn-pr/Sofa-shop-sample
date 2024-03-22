import Image from "next/image";
import TopFirstSection from "./containers/TopFirstSection";
import SofaSlider from "./containers/SofaSlider"

export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-between ">
      <TopFirstSection />

      <div className="mt-10 w-full">
        <SofaSlider />
      </div>
    </main>
  );
}
