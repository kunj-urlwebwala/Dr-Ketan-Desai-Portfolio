/**
 * Garden Rounds visual direction: editorial modernism, composed asymmetry,
 * warm porcelain fields, deep forest-green type, and botanical care motifs.
 */
import { useState } from "react";
import {
  ArrowRight,
  ChevronDown,
  Facebook,
  HeartHandshake,
  Instagram,
  Linkedin,
  MapPin,
  Menu,
  Phone,
  Stethoscope,
  X,
} from "lucide-react";

const phoneLink = "tel:+919925097325";
const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Shreeya+Hospital+Ghatlodia+Ahmedabad";

function Wordmark() {
  return (
    <a className="brand-lockup" href="#top" aria-label="Shreeya Hospital home">
      <img
        className="brand-mark"
        src="/manus-storage/shreeya-mark_c559eb82.png"
        alt=""
        width={48}
        height={48}
      />
      <span className="brand-copy">
        <span className="brand-name">shreeya</span>
      </span>
    </a>
  );
}

const carePrinciples = [
  {
    number: "01",
    title: "Listen first",
    text: "Every family arrives with a story. We make room for the questions that matter before deciding what comes next.",
  },
  {
    number: "02",
    title: "Guide clearly",
    text: "Care works best when it is understandable. Guidance is shared in a calm, practical way—without unnecessary complexity.",
  },
  {
    number: "03",
    title: "Stay compassionate",
    text: "From a first visit to ongoing support, each conversation is shaped by patience, dignity, and attentive care.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div id="top" className="site-shell">
      <header className="site-header">
        <div className="header-inner">
          <Wordmark />
          <nav className="desktop-nav" aria-label="Primary navigation">
            <a href="#approach">Our approach</a>
            <a href="#doctor">Dr. Ketan</a>
            <a href="#visit">Visit us</a>
          </nav>
          <a className="header-call" href={phoneLink}>
            <Phone aria-hidden="true" size={14} strokeWidth={2.25} />
            <span>Call clinic</span>
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={23} /> : <Menu size={24} />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <a href="#approach" onClick={closeMenu}>Our approach</a>
            <a href="#doctor" onClick={closeMenu}>Dr. Ketan</a>
            <a href="#visit" onClick={closeMenu}>Visit us</a>
            <a href={phoneLink} onClick={closeMenu}>Call +91 99250 97325</a>
          </nav>
        )}
      </header>

      <main>
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
              <a className="scroll-prompt" href="#approach">
                <span className="scroll-wheel"><ChevronDown size={14} /></span>
                <span>Discover our approach</span>
                <ArrowRight aria-hidden="true" size={14} />
              </a>
            </div>

            <figure className="portrait-panel reveal-in delay-1">
              <div className="portrait-frame">
                <img
                  src="/manus-storage/dr-ketan-desai-portrait_8f1994f4.png"
                  alt="Dr. Ketan Desai, doctor at Shreeya Hospital in Ghatlodia, Ahmedabad"
                  width={1123}
                  height={1194}
                  fetchPriority="high"
                  decoding="async"
                />
                <div className="portrait-forest-stamp" aria-hidden="true">
                  <img src="/manus-storage/shreeya-mark_c559eb82.png" alt="" />
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

        <section id="approach" className="approach-section section-wrap">
          <div className="section-kicker reveal-in">
            <span><img className="kicker-mark" src="/manus-storage/shreeya-mark_c559eb82.png" alt="" />01</span>
            <p>Our approach</p>
          </div>
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

        <section id="doctor" className="doctor-section">
          <div className="doctor-visual" role="img" aria-label="Illustration of caring hands protecting a young plant">
            <img src="/manus-storage/shreeya-care-illustration_9c4dd0ec.png" alt="" width={1200} height={800} loading="lazy" decoding="async" />
            <span className="visual-seed seed-one" />
            <span className="visual-seed seed-two" />
          </div>
          <div className="doctor-copy section-wrap">
            <div className="section-kicker light-kicker reveal-in">
              <span><img className="kicker-mark" src="/manus-storage/shreeya-mark_c559eb82.png" alt="" />02</span>
              <p>Your doctor</p>
            </div>
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

        <section id="visit" className="visit-section section-wrap">
          <div className="visit-copy reveal-in">
            <div className="section-kicker">
              <span><img className="kicker-mark" src="/manus-storage/shreeya-mark_c559eb82.png" alt="" />03</span>
              <p>Visit Shreeya</p>
            </div>
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
            <img src="/manus-storage/shreeya-location-illustration_262f1d28.png" alt="Illustration of a welcoming hospital setting near Ghatlodia, Ahmedabad" width={960} height={1200} loading="lazy" decoding="async" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top section-wrap">
          <Wordmark />
          <p>Healthy Children <span>•</span> Happy Future</p>
          <div className="footer-utility">
            <a href={phoneLink}>+91 99250 97325 <ArrowRight aria-hidden="true" size={15} /></a>
            <nav className="social-nav" aria-label="Social media">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram aria-hidden="true" size={16} /></a>
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook aria-hidden="true" size={16} /></a>
              <a href="https://www.linkedin.com/in/ketan-desai-122b72258" target="_blank" rel="noopener noreferrer" aria-label="Dr. Ketan Desai on LinkedIn"><Linkedin aria-hidden="true" size={16} /></a>
            </nav>
          </div>
        </div>
        <div className="footer-bottom section-wrap">
          <p>© {new Date().getFullYear()} Shreeya Hospital. All rights reserved.</p>
          <a href="#top">Back to top <ArrowRight aria-hidden="true" size={14} /></a>
        </div>
      </footer>
    </div>
  );
}
