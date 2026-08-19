/** Garden Rounds footer: shared brand sign-off, contact, and social navigation. */
import { ArrowRight, Facebook, Instagram, Linkedin } from "lucide-react";
import { BrandLogo } from "@/components/BrandLogo";

type SiteFooterProps = { phoneLink: string };

export function SiteFooter({ phoneLink }: SiteFooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-top section-wrap">
        <BrandLogo />
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
  );
}
