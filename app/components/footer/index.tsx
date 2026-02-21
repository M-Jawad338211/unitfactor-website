import Link from "next/link";
import ShowcaseCard, { ShowcaseCardProps } from "./showcase-card";
import FooterSocial from "./social";

const showcaseItems: ShowcaseCardProps[] = [
  {
    img: { src: "/svg/clutch-rating.svg", height: 64, width: 80 },
    text: (
      <span>
        50+ reviews <br /> on Clutch
      </span>
    ),
    background: { src: "/svg/clutch-rating-bg.svg", height: 64, width: 80 },
  },
  {
    img: { src: "/svg/webflow.svg", height: 64, width: 80 },
    text: (
      <span>
        Official Webflow <br /> partner
      </span>
    ),
    background: {
      src: "/svg/webflow-showcase-bg.svg",
      height: 237,
      width: 154,
    },
  },
  {
    img: { src: "/avif/upwork-rating.avif", height: 64, width: 80 },
    text: (
      <span>
        Top rated profile <br /> on Upwork
      </span>
    ),
    background: { src: "/svg/upwork-rating-bg.svg", height: 64, width: 80 },
  },
  {
    img: { src: "/svg/linkedin.svg", height: 64, width: 80 },
    text: (
      <span>
        20k followers <br /> on LinkedIn
      </span>
    ),
    background: { src: "/svg/webflow-showcase-bg.svg", height: 64, width: 80 },
  },
];

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contacts" },
];

const sectionLinks = [
  { label: "Solutions", href: "/#solutions" },
  { label: "Experience", href: "/#experiences" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/12 bg-background">
      <div className="mx-auto max-w-9xl px-4 sm:px-12 lg:px-16 xl:px-28 py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-14">
          <div>
            <p className="text-xs font-semibold tracking-[0.14em] text-light-primary uppercase">
              Reputation
            </p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-white sm:text-4xl">
              Trusted across startups and enterprise teams
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {showcaseItems.map((itm, idx) => (
                <ShowcaseCard
                  key={`showcase-card-${idx}`}
                  img={itm.img}
                  background={itm.background}
                  text={itm.text}
                />
              ))}
            </div>
          </div>

          <div className="grid h-fit grid-cols-1 gap-8 rounded-3xl border border-white/12 bg-neutral-900/70 p-6 sm:grid-cols-2 sm:p-8">
            <nav aria-label="Page links">
              <p className="text-xs font-semibold tracking-[0.12em] text-white/70 uppercase">
                Pages
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {pageLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-sm font-medium text-white/85 transition-colors duration-300 hover:text-light-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <nav aria-label="Homepage sections">
              <p className="text-xs font-semibold tracking-[0.12em] text-white/70 uppercase">
                Homepage
              </p>
              <div className="mt-4 flex flex-col gap-3">
                {sectionLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="w-fit text-sm font-medium text-white/85 transition-colors duration-300 hover:text-light-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </nav>

            <div className="sm:col-span-2">
              <p className="max-w-sm text-sm leading-relaxed text-white/75">
                Building a product and need design plus engineering support? Let
                us map a focused roadmap for your next release.
              </p>
              <Link
                href="/contacts"
                className="mt-4 inline-flex items-center rounded-full bg-white px-5 py-2 text-sm font-semibold text-primary transition-colors duration-300 hover:bg-primary hover:text-white"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </div>

        <FooterSocial />
      </div>
    </footer>
  );
}
