import Image from "next/image";
import FloatingNav from "./components/global/FloatingNav";
import Hero from "./section/hero/Hero";
import Info from "./section/info/Info";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <FloatingNav />
      <Hero />
      <Info/>
      <Footer/>
    </div>
  );
}
