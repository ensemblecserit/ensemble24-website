import Navbar from "@/modules/Navbar/Navbar";
import Hero from "@/modules/Hero/Hero";
import Marquee from "@/modules/Marquee/Marquee";
import ProvidePadding from "@/components/ProvidePadding";
import About from "@/modules/About/About";
import Events from "@/modules/Events/Events";
import Contact from "@/modules/Contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <ProvidePadding>
        <About />
        <Events />
        <Contact />
      </ProvidePadding>
    </>
  );
}
