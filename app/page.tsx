import { Metadata } from "next";
import Experiences from "./components/homepage-details/experiences";
import Hero from "./components/homepage-details/hero";
import Projects from "./components/homepage-details/projects";
import Services from "./components/homepage-details/services";

export const metadata: Metadata = {
  title: "UnitFactor | Development & Design Solutions",
  description:
    "Unitfactor is leading development & design solutions agency providing services worldwide",
};

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <div className="relative isolate bg-background">
        <div className="pointer-events-none absolute inset-x-[-18%] top-[-10rem] -z-10 h-[42rem] bg-[radial-gradient(circle_at_78%_20%,rgba(227,81,81,0.20),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] top-[26rem] -z-10 h-[54rem] bg-[radial-gradient(circle_at_18%_50%,rgba(10,50,83,0.38),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] bottom-[18rem] -z-10 h-[48rem] bg-[radial-gradient(circle_at_84%_60%,rgba(227,81,81,0.16),transparent_56%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] bottom-[-12rem] -z-10 h-[42rem] bg-[radial-gradient(circle_at_20%_70%,rgba(10,50,83,0.30),transparent_58%)] blur-3xl" />
        <Services />
        <Experiences />
        <Projects />
      </div>
    </main>
  );
}
