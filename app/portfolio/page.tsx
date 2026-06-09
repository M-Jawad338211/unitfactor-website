import Bookings from "../components/portfolio-details/bookings";
import Partners from "../components/portfolio-details/partners";
import ServicesAccordion from "../components/portfolio-details/services-accordion";
import Testimonials from "../components/portfolio-details/testimonials";

export default function Portfolio() {
  return (
    <main className="overflow-x-clip">
      <div className="relative isolate bg-background">
        <div className="pointer-events-none absolute inset-x-[-18%] top-[-12rem] -z-10 h-[46rem] bg-[radial-gradient(circle_at_20%_18%,rgba(227,81,81,0.20),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] top-[30rem] -z-10 h-[54rem] bg-[radial-gradient(circle_at_86%_48%,rgba(10,50,83,0.36),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] bottom-[12rem] -z-10 h-[48rem] bg-[radial-gradient(circle_at_18%_70%,rgba(227,81,81,0.14),transparent_56%)] blur-3xl" />
        <Partners />
        <ServicesAccordion />
        <Testimonials />
        <Bookings />
      </div>
    </main>
  );
}
