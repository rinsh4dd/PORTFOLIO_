import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientSideComponents from "@/components/ClientSideComponents";
import Preloader from "@/components/PreLoader";
import Script from "next/script";



// 1. The SEO Configuration

export const metadata = {
  metadataBase: new URL('https://rinsh4dd.vercel.app'),
  title: {
    default: "Mohammed Rinshad | Full Stack Developer .NET & React",
    template: "%s | Mohammed Rinshad"
  },
  description: "Don't hire average. Mohammed Rinshad builds high-performance, scalable .NET & React applications that CRUSH the competition. See why top brands trust Rinshad.",
  keywords: [
    "Mohammed Rinshad",
    "Mohammed Rinshad C",
    "rinsh4dd",
    "vercel rinshad",
    "Rinshad Developer",
    "Full Stack Developer Kerala",
    "Full Stack Developer Tirur",
    "Full Stack Developer Malappuram",
    ".NET Developer Malappuram",
    "React Developer Tirur",
    "ASP.NET Core Expert",
    "Smart Serve ERP",
    "Smart Desk System",
    "Bridgeon",
    "Sharaco Technologies",

  ],
  authors: [{ name: "Mohammed Rinshad" }],
  creator: "Mohammed Rinshad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinsh4dd.vercel.app",
    title: "Mohammed Rinshad - Full Stack Developer",
    description: "🚀 See the Full Stack Developer redefining web performance. .NET Core, React & Next.js Expert. Click to view the portfolio that's turning heads.",
    siteName: "Mohammed Rinshad Portfolio",
    images: [
      {
        url: "/Rinshad.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohammed Rinshad Portfolio"
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "JDkKCcuiWQNW8SFd61qvwwMBGvgVTYVkpiK1X165tNw",
  }
};

export default function RootLayout({ children }) {
  // 2. Structured Data (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Mohammed Rinshad",
      "alternateName": "Rinsh4dd",
      "url": "https://rinsh4dd.vercel.app",
      "sameAs": [
        "https://linkedin.com/in/rinshad",
        "https://github.com/rinsh4dd",
        "https://instagram.com/rinsh4dd",
        "https://buymeacoffee.com/rinsh4dd"
      ],
      "jobTitle": "Full Stack Developer",
      "worksFor": {
        "@type": "Organization",
        "name": "Sharaco Technologies"
      },
      "knowsAbout": ["ASP.NET Core", "React", "Clean Architecture", "SQL", "Cloud Computing"]
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="json-ld-profile"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Preloader />
          <ClientSideComponents />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}