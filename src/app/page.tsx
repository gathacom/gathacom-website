import { PortfolioTemplate } from "@/components/templates/portfolio-template";
import { site } from "@/lib/data/site";

/**
 * The portfolio is fully static: no request-time data, no cookies, no
 * headers. Next.js prerenders it at build time and the CDN serves the
 * HTML with immutable cache headers. Content changes ship with a build.
 */
export const dynamic = "force-static";
export const revalidate = false;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.fullName,
      alternateName: site.name,
      url: site.url,
      jobTitle: site.role,
      description: site.description,
      email: `mailto:${site.email}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Jakarta",
        addressCountry: "ID",
      },
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "UPN 'Veteran' Yogyakarta",
      },
      knowsAbout: [
        "Fullstack Engineering",
        "Next.js",
        "React",
        "Nuxt",
        "TypeScript",
        "System Architecture",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} — Architect of Code & Design`,
      description: site.description,
      publisher: { "@id": `${site.url}/#person` },
      inLanguage: "en",
    },
  ],
};

export default function Home() {
  return (
    <>
      <PortfolioTemplate />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
