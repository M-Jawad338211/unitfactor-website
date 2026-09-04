import type { Metadata } from "next";
import UnitXAgents from "../components/unitx-details/agents";
import UnitXAutomations from "../components/unitx-details/automations";
import UnitXCta from "../components/unitx-details/cta";
import UnitXFaqs from "../components/unitx-details/faqs";
import UnitXHero from "../components/unitx-details/hero";
import UnitXIntegrations from "../components/unitx-details/integrations";
import UnitXIsolation from "../components/unitx-details/isolation";
import UnitXPlatform from "../components/unitx-details/platform";
import UnitXPricing from "../components/unitx-details/pricing";
import UnitXProblem from "../components/unitx-details/problem";
import UnitXProof from "../components/unitx-details/proof";
import UnitXSecurity from "../components/unitx-details/security";
import UnitXSolutions from "../components/unitx-details/solutions";
import UnitXSubnav from "../components/unitx-details/subnav";
import UnitXTrust from "../components/unitx-details/trust";
import UnitXViews from "../components/unitx-details/views";

export const metadata: Metadata = {
  title: "UnitX | Work management, project tracking, and AI teammates",
  description:
    "UnitX is the work management platform that unifies projects, workflows, docs, goals, and dashboards — with AI teammates and true workspace isolation. Built by UnitFactor.",
  openGraph: {
    title: "UnitX | Work management with AI teammates",
    description:
      "Projects, workflows, docs, goals, and dashboards in one workspace — with AI teammates and database-level isolation between every client and business unit.",
    type: "website",
  },
};

export default function UnitXPage() {
  return (
    <main className="overflow-x-clip bg-background">
      <UnitXSubnav />
      <UnitXHero />
      <UnitXTrust />
      <UnitXProblem />
      <UnitXViews />
      <UnitXPlatform />
      <UnitXAgents />
      <UnitXAutomations />
      <UnitXSolutions />
      <UnitXIsolation />
      <UnitXIntegrations />
      <UnitXSecurity />
      <UnitXProof />
      <UnitXPricing />
      <UnitXFaqs />
      <UnitXCta />
    </main>
  );
}
