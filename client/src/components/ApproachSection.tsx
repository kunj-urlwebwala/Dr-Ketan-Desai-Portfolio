/** Garden Rounds care framework: reusable principle cards and editorial hierarchy. */
import { carePrinciples } from "@/lib/site";
import { SectionKicker } from "@/components/SectionKicker";

export function ApproachSection() {
  return (
    <section id="approach" className="approach-section section-wrap">
      <SectionKicker number="01" label="Our approach" />
      <div className="approach-heading-row reveal-in delay-1">
        <h2>Small concerns deserve<br /><em>thoughtful attention.</em></h2>
        <p className="section-lead">
          At Shreeya Hospital, we believe good care begins with a conversation. We take the time to understand what your child and family need.
        </p>
      </div>
      <div className="principles-grid">
        {carePrinciples.map((principle, index) => (
          <article className={`principle-card reveal-in delay-${index + 1}`} key={principle.number}>
            <span className="principle-number">{principle.number}</span>
            <h3>{principle.title}</h3>
            <p>{principle.text}</p>
            <span className="principle-leaf" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
