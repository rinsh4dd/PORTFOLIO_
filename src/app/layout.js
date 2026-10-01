import "@/app/globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientSideComponents from "@/components/ClientSideComponents";
import Script from "next/script";


// 1. The SEO Configuration

export const metadata = {
  metadataBase: new URL('https://rinshad.site'),
  title: {
    default: "Mohammed Rinshad - Full Stack .NET Developer | ASP.NET Core & React.js",
    template: "%s | Mohammed Rinshad"
  },
  alternates: {
    canonical: "https://rinshad.site",
  },
  icons: {
    icon: "/rinshadfavicon.jpeg",
  },

  description:
    "Mohammed Rinshad is a Full Stack .NET Developer specializing in C#, ASP.NET Core, React.js, and SQL Server. Experienced in SaaS platforms, appointment booking, e-commerce, and notification infrastructure.",

  keywords: [
    "Mohammed Rinshad",
    "Full Stack .NET Developer",
    "ASP.NET Core Developer India",
    "C# Developer Kerala",
    "React.js Developer",
    "SQL Server Developer",
    "Dapper .NET Developer",
    "Entity Framework Core",
    "REST API Architecture",
    "Backend Developer Portfolio"
  ],

  authors: [{ name: "Mohammed Rinshad" }],
  creator: "Mohammed Rinshad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rinshad.site",
    title: "Mohammed Rinshad - Full Stack .NET Developer",
    description: "Full Stack .NET Developer building scalable ASP.NET Core APIs, modern React.js frontends, and robust SQL Server systems.",
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
    "jobTitle": "Full Stack .NET Developer",
    "description": "Full Stack .NET Developer specializing in C#, ASP.NET Core, React.js, and SQL Server building SaaS, booking, and e-commerce platforms.",
    "worksFor": {
      "@type": "Organization",
      "name": "Sharaco Technologies Pvt Ltd"
    },
    "knowsAbout": [
      "ASP.NET Core",
      "C#",
      ".NET",
      "React.js",
      "Next.js",
      "SQL Server",
      "Dapper",
      "Entity Framework Core",
      "REST API",
      "Tailwind CSS",
      "Clean Architecture",
      "System Design"
    ],
    "sameAs": [
      "https://github.com/rinsh4dd",
      "https://linkedin.com/in/rinsh4dd",
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
          <ClientSideComponents />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
