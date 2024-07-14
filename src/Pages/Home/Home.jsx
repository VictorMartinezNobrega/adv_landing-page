import Hero from "../../Components/Hero/Hero";
import Contact from "../../Components/Contact/Contact";
//import OfficeAddress from "../../Components/OfficeAddress/OfficeAddress";

export default function App() {
  return (
    <main className="max-w-[1280px] m-auto px-8">
      <Hero />
      <Contact />
      { /*<OfficeAddress />*/}
    </main>
  );
}
