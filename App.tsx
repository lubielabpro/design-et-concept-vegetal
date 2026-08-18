import Nav, { FloatingCall } from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Devis from "./components/Devis";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body antialiased">
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Services />
        <Reviews />
        <Devis />
      </main>
      <Footer />
      <FloatingCall />
    </div>
  );
}
