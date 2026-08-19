/**
 * Garden Rounds design system: centralised site content and canonical links
 * for the React and Vite implementation of the Shreeya Hospital portfolio.
 */
export const phoneLink = "tel:+919925097325";

export const mapsLink =
  "https://www.google.com/maps/search/?api=1&query=Shreeya+Hospital+Ghatlodia+Ahmedabad";

export const carePrinciples = [
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
] as const;

export const assets = {
  mark: "/images/shreeya-mark.png",
  doctorPortrait: "/images/dr-ketan-desai-portrait.png",
  careIllustration: "/images/shreeya-care-illustration.png",
  locationIllustration: "/images/shreeya-location-illustration.png",
  heroChildren: "/images/shreeya-hero-children.png",
} as const;
