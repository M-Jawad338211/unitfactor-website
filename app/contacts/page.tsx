import Contacts from "../components/contact-details/contacts";
import Faqs from "../components/contact-details/faqs";
import Partners from "../components/contact-details/partner";

export default function ContactUs() {
  return (
    <main className="overflow-x-clip">
      <div className="relative isolate bg-background">
        <div className="pointer-events-none absolute inset-x-[-18%] top-[-12rem] -z-10 h-[46rem] bg-[radial-gradient(circle_at_16%_22%,rgba(227,81,81,0.20),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] top-[26rem] -z-10 h-[54rem] bg-[radial-gradient(circle_at_86%_42%,rgba(10,50,83,0.36),transparent_58%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-x-[-18%] bottom-[-8rem] -z-10 h-[44rem] bg-[radial-gradient(circle_at_20%_72%,rgba(227,81,81,0.13),transparent_56%)] blur-3xl" />
        <Contacts />
        <Faqs />
        <Partners />
      </div>
    </main>
  );
}
