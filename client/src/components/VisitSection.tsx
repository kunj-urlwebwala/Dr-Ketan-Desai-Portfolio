/** Garden Rounds contact section: local address and practical clinic actions. */
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { assets } from "@/lib/site";
import { SectionKicker } from "@/components/SectionKicker";

type VisitSectionProps = { phoneLink: string; mapsLink: string };

export function VisitSection({ phoneLink, mapsLink }: VisitSectionProps) {
  return (
    <section id="visit" className="visit-section section-wrap">
      <div className="visit-copy reveal-in">
        <SectionKicker number="03" label="Visit Shreeya" />
        <h2>Here when your<br /><em>family needs us.</em></h2>
        <div className="address-block">
          <MapPin aria-hidden="true" size={20} />
          <address>
            Near BRTS / Raj Residency, Opp. Garden,<br />
            Janta Nagar Cross Road, Ghatlodia,<br />
            Ahmedabad, Gujarat.
          </address>
        </div>
        <div className="visit-actions">
          <a className="button-primary" href={phoneLink}>
            <Phone aria-hidden="true" size={16} />
            +91 99250 97325
          </a>
          <a className="button-text" href={mapsLink} target="_blank" rel="noopener noreferrer">
            Get directions <ArrowRight aria-hidden="true" size={15} />
          </a>
        </div>
      </div>
      <div className="visit-visual reveal-in delay-2">
        <div className="map-note"><span className="seed-dot" />Ghatlodia · Ahmedabad</div>
        <img src={assets.locationIllustration} alt="Illustration of a welcoming hospital setting near Ghatlodia, Ahmedabad" width={960} height={1200} loading="lazy" decoding="async" />
      </div>
    </section>
  );
}
