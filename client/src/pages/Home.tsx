/**
 * Garden Rounds page composition: a semantic React and Vite portfolio page
 * assembled from reusable brand, navigation, content, and footer components.
 */
import { ApproachSection } from "@/components/ApproachSection";
import { DoctorSection } from "@/components/DoctorSection";
import { HeroSection } from "@/components/HeroSection";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { VisitSection } from "@/components/VisitSection";
import { mapsLink, phoneLink } from "@/lib/site";

export default function Home() {
  return (
    <div id="top" className="site-shell">
      <SiteHeader phoneLink={phoneLink} />
      <main>
        <HeroSection phoneLink={phoneLink} />
        <ApproachSection />
        <DoctorSection phoneLink={phoneLink} />
        <VisitSection phoneLink={phoneLink} mapsLink={mapsLink} />
      </main>
      <SiteFooter phoneLink={phoneLink} />
    </div>
  );
}

