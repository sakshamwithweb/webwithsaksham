import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MyJourney from "@/components/MyJourney";
import Services from "@/components/Services";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      {/* <MyJourney/>
      <TechStack/>
      <Work/>
      <Services/>
      <Footer/> */}
    </div>
  );
}
