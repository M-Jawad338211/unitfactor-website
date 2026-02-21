import Bookings from "../components/portfolio-details/bookings";
import Partners from "../components/portfolio-details/partners";
import ServicesAccordion from "../components/portfolio-details/services-accordion";
import Testimonials from "../components/portfolio-details/testimonials";

export default function Portfolio() {
  return (
    <main className="mx-auto max-w-9xl overflow-x-clip">
      <Partners />
      <ServicesAccordion />
      <Testimonials />
      <Bookings />
    </main>
  );
}
