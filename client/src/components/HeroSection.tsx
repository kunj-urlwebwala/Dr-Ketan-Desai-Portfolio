/** Garden Rounds hero: editorial family-health introduction with curved doctor portrait. */
import { ArrowRight, HeartHandshake, MapPin, Stethoscope } from "lucide-react";
import { assets } from "@/lib/site";

type HeroSectionProps = { phoneLink: string };

export function HeroSection({ phoneLink }: HeroSectionProps) {
  return (
    <>
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid">
          <div className="hero-copy reveal-in">
            <p className="eyebrow"><span className="seed-dot" />Shreeya Hospital · Ghatlodia</p>
            <h1 id="hero-title">
              Healthy children.<br />
              <em>Happy future.</em>
            </h1>
            <p className="hero-intro">
              Thoughtful, doctor-led care for the small concerns and bright milestones that shape childhood.
            </p>
            <div className="hero-actions">
              <a className="button-primary" href={phoneLink}>
                <span>Speak with Dr. Ketan</span>
                <ArrowRight aria-hidden="true" size={17} />
              </a>
              <a className="button-text" href="#visit">
                Find Shreeya Hospital <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
          </div>

          <figure className="portrait-panel reveal-in delay-1">
            <div className="portrait-frame">
              <img
                src={assets.doctorPortrait}
                alt="Dr. Ketan Desai, doctor at Shreeya Hospital in Ghatlodia, Ahmedabad"
                width={1123}
                height={1194}
                fetchPriority="high"
                decoding="async"
              />
              <div className="portrait-forest-stamp" aria-hidden="true">
                <img src={assets.mark} alt="" />
                <span>Care with<br />Compassion</span>
              </div>
            </div>
            <figcaption className="portrait-caption">
              <div>
                <span className="caption-label">Doctor</span>
                <strong>Dr. Ketan Desai</strong>
              </div>
              <div className="caption-rule" />
              <span className="caption-tag">Care with Compassion</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="trust-strip" aria-label="Hospital details">
        <div className="trust-inner">
          <p><HeartHandshake aria-hidden="true" size={19} /> Care with Compassion</p>
          <span className="trust-separator" />
          <p><Stethoscope aria-hidden="true" size={19} /> Doctor-led family care</p>
          <span className="trust-separator" />
          <p><MapPin aria-hidden="true" size={19} /> Ghatlodia, Ahmedabad</p>
        </div>
      </section>
    </>
  );
}
