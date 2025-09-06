export async function searchDocs(query) {
  const docs = [
    "We are a web development agency specializing in MERN, Next.js, and WordPress.",
    "Our services include website design, SEO optimization, and e-commerce solutions.",
    "We have delivered 200+ projects for startups and enterprises.",
    "Contact us at support@agency.com or call +94-123-456789.",

    // PHP Development
    "PHP Landing Page Website: LKR 25,000. Custom PHP/HTML/CSS, basic SEO, mobile responsive, free/premium support.",
    "PHP Business Website: LKR 45,000. Up to 10 pages, advanced SEO & analytics, CMS integration, free support.",
    "PHP Fullstack / E-commerce Package: LKR 80,000+. Unlimited pages & features, API integration, database management.",

    // WordPress Development
    "WordPress Landing Page Website: LKR 15,000. Custom WP theme, basic SEO, responsive, unlimited free support.",
    "WordPress Business Website: LKR 45,000. Up to 10 pages, advanced SEO & analytics, CMS integration, free support.",
    "WordPress Fullstack / E-commerce Package: LKR 80,000+. Unlimited pages and backend integrations.",

    // React Development
    "React Landing Page Website: LKR 35,000+. Single-page React site, responsive, animations, contact form, basic SEO, unlimited help.",
    "React Business / Multi-page Website: LKR 60,000+. Unlimited pages, SEO-friendly SPA or multipage setup, contact/email, Google Maps & blog, free support.",
    "React Fullstack / E-commerce Package: LKR 200,000+. Modern React UI/UX, backend integration (Node.js), database, user authentication, admin dashboard, e-commerce, optional API integrations.",

    // UI/UX Design
    "Basic UI Design Package: LKR 5,000+. 1–3 UI screens, minimal modern design, responsive layouts, typography & color schemes, simple prototypes.",
    "Multi-page UI & UX Package: LKR 25,000+. 5–10 screens/pages, interactive prototypes, mobile-first design, asset handoff-ready.",
    "Premium UX/UI & Product Design Package: LKR 50,000+. Full web/app design, high-fidelity prototypes, UX research & testing, custom components, responsive & accessible design, optional motion/micro-interactions.",

    // Graphic Design Packages
    "Poster Design: LKR 1,500+. Revisions included, print/web-ready.",
    "Banner Design: LKR 2,000+. Revisions included, print/web-ready.",
    "Flyer / Handbill: LKR 1,500+. Revisions included, print/web-ready.",
    "Logo Design: LKR 2,500+. Revisions included, print/web-ready.",
    "Illustrations: LKR 3,500+. Revisions included, print/web-ready.",
  ];
  // For now, return all docs joined
  // Later replace with embedding similarity search
  return docs.join("\n");
}
