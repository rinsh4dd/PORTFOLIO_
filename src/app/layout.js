import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientSideComponents from "@/components/ClientSideComponents";
import Preloader from "@/components/PreLoader";
import { Outfit } from "next/font/google";
import Script from "next/script";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});


// 1. The SEO Configuration

export const metadata = {
  metadataBase: new URL('https://rinshad.site'),
  title: {
    default: "Mohammed Rinshad - .NET Backend Developer | ASP.NET Core & SQL Server",
    template: "%s | Mohammed Rinshad"
  },
  alternates: {
    canonical: "https://rinshad.site",
  },
  icons: {
    icon: "/rinshadfavicon.jpeg",
  },

  description:
    "Mohammed Rinshad is a .NET Backend Developer building scalable ASP.NET Core APIs, SQL Server systems and high-performance backend architecture. Portfolio, projects and experience.",

  keywords: [
    "Mohammed Rinshad",
    "Rinshad .NET Developer",
    ".NET Backend Developer Kerala",
    "ASP.NET Core Developer India",
    "C# Backend Developer",
    "SQL Server Developer",
    "Entity Framework Core Developer",
    "REST API Developer",
    "Backend Developer Portfolio"
  ],

  authors: [{ name: "Mohammed Rinshad" }],
  creator: "Mohammed Rinshad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinshad.site",
    title: "Mohammed Rinshad - .NET Backend Developer",
    description: "ASP.NET Core backend developer building scalable APIs and SQL Server architectures.",
    siteName: "Mohammed Rinshad Portfolio",
    images: [
      {
        url: "https://rinshad.site/Rinshad.jpeg",
        width: 1200,
        height: 630,
        alt: "Mohammed Rinshad"
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
    "@type": "Person",
    "name": "Mohammed Rinshad",
    "alternateName": "Rinsh4dd",
    "url": "https://rinshad.site",
    "image": "https://rinshad.site/Rinshad.jpeg",
    "jobTitle": ".NET Backend Developer",
    "description": "ASP.NET Core backend developer specializing in scalable REST APIs and SQL Server systems.",
    "worksFor": {
      "@type": "Organization",
      "name": "Sharaco Technologies"
    },
    "knowsAbout": [
      "ASP.NET Core",
      "C#",
      ".NET",
      "SQL Server",
      "REST API",
      "Entity Framework Core",
      "Clean Architecture",
      "System Design"
    ],
    "sameAs": [
      "https://github.com/rinsh4dd",
      "https://linkedin.com/in/rinshad",
      "https://instagram.com/rinsh4dd",
      "https://buymeacoffee.com/rinsh4dd"
    ]
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