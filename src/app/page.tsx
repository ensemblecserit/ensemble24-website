import ProvidePadding from "@/components/ProvidePadding";
import About from "@/modules/About/About";
import Contact from "@/modules/Contact/Contact";
import Events from "@/modules/Events/Events";
import Hero from "@/modules/Hero/Hero";
import Marquee from "@/modules/Marquee/Marquee";

export default function Home() {
  return (
    <>
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
