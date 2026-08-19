/** Garden Rounds brand primitive: shared Shreeya heart-sprout lockup. */
import { assets } from "@/lib/site";

export function BrandLogo() {
  return (
    <a className="brand-lockup" href="#top" aria-label="Shreeya Hospital home">
      <img
        className="brand-mark"
        src={assets.mark}
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
