import { Metadata } from "next";
import Experiences from "./components/homepage-details/experiences";
import Hero from "./components/homepage-details/hero";
import Projects from "./components/homepage-details/projects";
import Services from "./components/homepage-details/services";
import Solutions from "./components/homepage-details/solutions";

export const metadata: Metadata = {
  title: "UnitFactor | Development & Design Solutions",
  description:
    "Unitfactor is leading development & design solutions agency providing services worldwide",
};

export default function Home() {
  return (
    <main className="mx-auto max-w-9xl overflow-x-clip">
      <Hero />
      <Solutions />
      <Experiences />
      <Services />
      <Projects />
    </main>
  );
}
