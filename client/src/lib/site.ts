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
  mark: "/manus-storage/shreeya-mark_c559eb82.png",
  doctorPortrait: "/manus-storage/dr-ketan-desai-portrait_8f1994f4.png",
  careIllustration: "/manus-storage/shreeya-care-illustration_9c4dd0ec.png",
  locationIllustration: "/manus-storage/shreeya-location-illustration_262f1d28.png",
} as const;
