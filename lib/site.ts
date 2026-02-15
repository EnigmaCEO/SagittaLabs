export const siteConfig = {
  name: "Sagitta Labs",
  description:
    "Autonomous continuity and capital systems for resilient infrastructure.",
  url: "https://sagittalabs.com",
  ogImage: "https://sagittalabs.com/og-sagitta-labs.jpg",
  contact: {
    email: "contact@sagittalabs.com",
    pressEmail: "press@sagittalabs.com",
    partnershipsEmail: "partnerships@sagittalabs.com",
    researchEmail: "research@sagittalabs.com"
  },
  logo: {
    primary: "/Favicon_64x64-01.png",
    large: "/Favicon_192x192-01.png",
    alternate: "/Favicon_64x64-02.png",
    hero: "/Favicon_192x192-01.png"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Protocol", href: "/protocol" },
    { label: "Use Cases", href: "/use-cases" },
    { label: "Systems", href: "/systems" },
    { label: "Security", href: "/security" },
    { label: "Docs", href: "/docs" },
    { label: "Media", href: "/media" },
    { label: "Contact", href: "/contact" }
  ]
} as const;
