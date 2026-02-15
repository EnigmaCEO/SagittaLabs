export const siteConfig = {
  name: "Sagitta Labs",
  description:
    "Autonomous continuity and capital systems for resilient infrastructure.",
  url: "https://example.com",
  ogImage: "https://example.com/og-sagitta-labs.jpg",
  logo: {
    primary: "/Favicon_64x64-01.png",
    large: "/Favicon_192x192-01.png",
    alternate: "/Favicon_64x64-02.png",
    hero: "/Favicon_192x192-01.png"
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Protocol", href: "/protocol" },
    { label: "Products", href: "/products" },
    { label: "Docs", href: "/docs" },
    { label: "Contact", href: "/contact" }
  ]
} as const;
