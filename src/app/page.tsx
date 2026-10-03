import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Space from "@/components/Space";
import Experience from "@/components/Experience";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";
import MenuPreview from "@/components/MenuPreview";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Menu />
      <About />
      <Space />
      <Experience />
      <MenuPreview />
      <Reservation />
      <Location />
      <Footer />
    </main>
  );
}
