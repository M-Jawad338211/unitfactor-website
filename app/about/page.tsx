import Engagements from "../components/about-details/engagements";
import Recognitions from "../components/about-details/recognition";
import Story from "../components/about-details/story";
import Talents from "../components/about-details/talents";

export default function AboutPage() {
  return (
    <main className="overflow-x-clip">
      <div className="relative isolate bg-background">
        <div className="pointer-events-none absolute inset-x-[-18%] top-[-12rem] -z-10 h-[46rem] bg-[radial-gradient(circle_at_20%_20%,rgba(227,81,81,0.20),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] top-[24rem] -z-10 h-[54rem] bg-[radial-gradient(circle_at_84%_42%,rgba(10,50,83,0.34),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] bottom-[10rem] -z-10 h-[48rem] bg-[radial-gradient(circle_at_16%_64%,rgba(227,81,81,0.13),transparent_56%)] blur-3xl" />
        <Talents />
        <Story />
        <Recognitions />
        <Engagements />
      </div>
    </main>
  );
}
