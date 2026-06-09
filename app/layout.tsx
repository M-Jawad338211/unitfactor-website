import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/space-grotesk";
import Footer from "./components/footer";
import Header from "./components/header";
import SmoothScroll from "./components/shared/smooth-scroll";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Unitfactor | Product Design and Software Development Agency",
    template: "%s | Unitfactor",
  },
  description:
    "Unitfactor is a product design and software development agency helping teams launch reliable digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body className={`antialiased`}>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
