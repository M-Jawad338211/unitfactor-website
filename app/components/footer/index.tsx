import Link from "next/link";
import Image from "next/image";
import FooterSocial from "./social";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contacts" },
];

const sectionLinks = [
  { label: "Services", href: "/#services" },
  { label: "Industries", href: "/#experiences" },
  { label: "Why Unitfactor", href: "/#projects" },
  { label: "Case studies", href: "/portfolio" },
];

const serviceLinks = [
  { label: "Product strategy", href: "/#services" },
  { label: "UX/UI design", href: "/#services" },
  { label: "Web applications", href: "/#services" },
  { label: "Cloud and DevOps", href: "/#services" },
];

const productLinks = [
  { label: "UnitX", href: "/unitx" },
];

const highlightItems = [
  {
    title: "Official Webflow partner",
    description: "Recognized delivery support for Webflow builds and handoffs.",
    src: "/svg/webflow.svg",
    alt: "Webflow partner",
  },
  {
    title: "Top Rated on Upwork",
    description: "Marketplace proof from clients who rely on us for execution.",
    src: "/avif/upwork-rating.avif",
    alt: "Upwork top rated",
  },
  {
    title: "LinkedIn community",
    description: "A visible product and technology presence with active reach.",
    src: "/svg/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    title: "50+ Clutch reviews",
    description: "Third-party client feedback across design and development.",
    src: "/svg/clutch-rating.svg",
    alt: "Clutch reviews",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#080808]">
      <div className="site-container py-14 sm:py-16">
        <div className="rounded-[40px] bg-zinc-800/70 p-6 sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1.8fr] lg:gap-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-light-primary">
                Unitfactor
              </p>
              <h2 className="mt-3 max-w-xl font-display text-3xl font-semibold leading-tight text-neutral-200 sm:text-4xl">
                Product teams move{" "}
                <span className="text-light-primary">better</span>.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-neutral-300 sm:text-base">
                We help founders, product teams, and agencies turn complex
                requirements into launch-ready digital products.
              </p>
              <Link
                href="/contacts"
                className="mt-6 inline-flex items-center rounded-full bg-neutral-200 px-5 py-3 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-neutral-200"
              >
                Start a conversation
              </Link>
            </div>

            <div className="grid gap-8 grid-cols-2 sm:grid-cols-4">
              <FooterNav title="Pages" links={pageLinks} />
              <FooterNav title="Explore" links={sectionLinks} />
              <FooterNav title="Services" links={serviceLinks} />
              <FooterNav title="Products" links={productLinks} />
            </div>
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {highlightItems.map((item) => (
              <article
                key={item.alt}
                className="rounded-2xl bg-neutral-200/[0.06] p-4"
              >
                <div className="flex h-12 items-center">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={128}
                    height={48}
                    className="max-h-11 w-auto object-contain"
                  />
                </div>
                <h4 className="mt-4 text-base font-semibold text-neutral-200">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <FooterSocial />
        </div>
      </div>
    </footer>
  );
}

function FooterNav({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <nav aria-label={title}>
      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-neutral-400">
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <Link
            key={`${title}-${link.href}-${link.label}`}
            href={link.href}
            className="w-fit text-sm font-medium text-neutral-300 transition-colors duration-300 hover:text-light-primary"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
