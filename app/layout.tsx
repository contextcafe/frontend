import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://contextcafe.com"),
  title: {
    default: "ContextCafe — Legal Intelligence, Reimagined",
    template: "%s | ContextCafe",
  },
  description:
    "ContextCafe transforms static legal documents into an intelligent legal operating system. Explore structured Indian bare acts, AI-powered case tracking, smart legal chatbot, and drafting tools — built for law students, advocates, and legal professionals.",
  keywords: [
    "Indian law",
    "bare acts",
    "legal intelligence",
    "legal tech",
    "AI legal assistant",
    "case tracking",
    "legal chatbot",
    "Indian legal database",
    "legal research platform",
    "ContextCafe",
    "law students India",
    "legal drafting tools",
    "IPC",
    "CrPC",
    "Indian Evidence Act",
  ],
  authors: [{ name: "Jatin Sangwan", url: "https://www.linkedin.com/in/jatinsangwan-webdev/" }],
  creator: "ContextCafe",
  publisher: "ContextCafe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://contextcafe.com",
    siteName: "ContextCafe",
    title: "ContextCafe — Legal Intelligence, Reimagined",
    description:
      "Transform static legal documents into an intelligent legal operating system. Structured bare acts, AI case tracking, smart chatbot, and drafting tools for Indian law.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "ContextCafe — Legal Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ContextCafe — Legal Intelligence, Reimagined",
    description:
      "AI-native legal platform for Indian law — structured bare acts, case tracking, smart chatbot, and drafting tools.",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://contextcafe.com",
  },
  category: "Legal Technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ContextCafe",
  url: "https://contextcafe.com",
  logo: "https://contextcafe.com/logo.png",
  description:
    "AI-native legal intelligence platform transforming Indian legal documents into structured, interactive, and contextual knowledge.",
  sameAs: [
    "https://www.instagram.com/contextcafe_",
    "https://www.linkedin.com/in/jatinsangwan-webdev/",
    "https://blog.contextcafe.com",
  ],
  foundingDate: "2025",
  founder: {
    "@type": "Person",
    name: "Jatin Sangwan",
    url: "https://www.linkedin.com/in/jatinsangwan-webdev/",
  },
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ContextCafe",
  url: "https://contextcafe.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://contextcafe.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
