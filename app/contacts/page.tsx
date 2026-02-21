import Contacts from "../components/contact-details/contacts";
import Faqs from "../components/contact-details/faqs";
import Partners from "../components/contact-details/partner";

export default function ContactUs() {
  return (
    <main className="mx-auto max-w-9xl overflow-x-clip">
      <Contacts />
      <Faqs />
      <Partners />
    </main>
  );
}
