/** Garden Rounds doctor statement: botanical illustration paired with clinical reassurance. */
import { ArrowRight } from "lucide-react";
import { assets } from "@/lib/site";
import { SectionKicker } from "@/components/SectionKicker";

type DoctorSectionProps = { phoneLink: string };

export function DoctorSection({ phoneLink }: DoctorSectionProps) {
  return (
    <section id="doctor" className="doctor-section">
      <div className="doctor-visual" role="img" aria-label="Illustration of caring hands protecting a young plant">
        <img src={assets.careIllustration} alt="" width={1200} height={800} loading="lazy" decoding="async" />
        <span className="visual-seed seed-one" />
        <span className="visual-seed seed-two" />
      </div>
      <div className="doctor-copy section-wrap">
        <SectionKicker number="02" label="Your doctor" light />
        <div className="doctor-statement reveal-in delay-1">
          <p className="doctor-quote-mark">“</p>
          <h2>Care is most meaningful when families feel <em>heard, informed, and supported.</em></h2>
          <div className="doctor-note">
            <div className="note-line" />
            <p>
              Dr. Ketan Desai welcomes every family to Shreeya Hospital with a simple commitment: to offer attentive care in a reassuring environment.
            </p>
          </div>
          <a className="button-on-dark" href={phoneLink}>
            Call the clinic <ArrowRight aria-hidden="true" size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
