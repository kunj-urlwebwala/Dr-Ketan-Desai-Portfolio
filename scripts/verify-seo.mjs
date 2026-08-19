import { readFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const indexHtml = readFileSync(resolve(projectRoot, "client/index.html"), "utf8");
const homePage = readFileSync(resolve(projectRoot, "client/src/pages/Home.tsx"), "utf8");
const expectedFiles = [
  "client/public/favicon.svg",
  "client/public/site.webmanifest",
  "client/public/robots.txt",
  "client/public/sitemap.xml",
];
const requiredHeadTokens = [
  "rel=\"canonical\"",
  "property=\"og:title\"",
  "property=\"og:description\"",
  "property=\"og:image\"",
  "name=\"twitter:card\"",
  "application/ld+json",
  "name=\"description\"",
  "name=\"keywords\"",
];

for (const file of expectedFiles) {
  if (!existsSync(resolve(projectRoot, file))) throw new Error(`Missing required SEO file: ${file}`);
}

for (const token of requiredHeadTokens) {
  if (!indexHtml.includes(token)) throw new Error(`Missing SEO head token: ${token}`);
}

const schemaMatch = indexHtml.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
if (!schemaMatch) throw new Error("Structured data script could not be found.");

const schema = JSON.parse(schemaMatch[1]);
const schemaTypes = schema["@graph"].map((item) => item["@type"]);
for (const type of ["WebSite", "Hospital", "Physician", "WebPage"]) {
  if (!schemaTypes.includes(type)) throw new Error(`Missing ${type} structured data.`);
}

for (const heading of ["<h1", "<h2", "<h3"]) {
  if (!homePage.includes(heading)) throw new Error(`Missing ${heading} in page hierarchy.`);
}

console.log("SEO validation passed: metadata, schema, crawl assets, and heading hierarchy are present.");
