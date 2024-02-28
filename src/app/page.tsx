import Navbar from "@/modules/Navbar/Navbar";
import Hero from "@/modules/Hero/Hero";
import Marquee from "@/modules/Marquee/Marquee";
import ProvidePadding from "@/components/ProvidePadding";
import About from "@/modules/About/About";
import Events from "@/modules/Events/EventsLink/Events";
import Contact from "@/modules/Contact/Contact";
import GalleryLink from "@/modules/Gallery/GalleryLink/Link";
import Sponsors from "@/modules/Sponsors/Sponsors";
import Footer from "@/modules/Footer/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <ProvidePadding>
        <About />
        <Events />
        <GalleryLink />
        <Sponsors />
        <Contact />
      </ProvidePadding>
      <Footer />
    </>
  );
}
