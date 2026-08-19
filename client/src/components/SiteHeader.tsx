/** Garden Rounds navigation: calm, accessible public-facing route anchors. */
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

type SiteHeaderProps = { phoneLink: string };

export function SiteHeader({ phoneLink }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <BrandLogo />
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
  );
}
