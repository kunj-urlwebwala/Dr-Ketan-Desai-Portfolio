/** Garden Rounds section primitive: recurring brand mark, index, and label. */
import { assets } from "@/lib/site";

type SectionKickerProps = {
  number: string;
  label: string;
  light?: boolean;
};

export function SectionKicker({ number, label, light = false }: SectionKickerProps) {
  return (
    <div className={`section-kicker${light ? " light-kicker" : ""} reveal-in`}>
      <span><img className="kicker-mark" src={assets.mark} alt="" />{number}</span>
      <p>{label}</p>
    </div>
  );
}
