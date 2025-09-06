export async function searchDocs(query) {
  const docs = [
    // Old docs
    "We are a web development agency specializing in MERN, Next.js, and WordPress.",
    "Our services include website design, SEO optimization, and e-commerce solutions.",
    "We have delivered 200+ projects for startups and enterprises.",
    "Contact us at support@agency.com or call +94-123-456789.",

    // New Lanka Web Solutions dataset
    "Lanka Web Solutions is a Sri Lankan-based web development agency offering modern, mobile-friendly web solutions to enhance business success.",
    "They offer web development, UI/UX design, graphic design, and SEO & digital marketing services.",
    "Web Development Services: Custom websites, e-commerce platforms, and scalable web applications.",
    "UI/UX Services: User-friendly and responsive designs for exceptional digital experiences.",
    "Graphic Design Services: Logos, branding materials, and social media visuals.",
    "SEO & Digital Marketing: Strategies to boost visibility, improve search engine rankings, and attract organic traffic.",
    "Contact Information: Galle Road, Colombo 06, Sri Lanka.",
    "Phone: +94 70 2000 982, Email: lankawebsolutions714@gmail.com",
    "Official website: https://lanka-web-solutions.vercel.app/",
    "Owner: Hasara Sankalpa",
  ];
  return docs.join("\n");
}
