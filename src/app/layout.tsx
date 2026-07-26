import type { Metadata } from "next";
import { Playfair_Display, DM_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://billisaction.org"),
  title: {
    default: "Bilis Initiative | Ending FGM, Empowering Girls",
    template: "%s | Bilis Initiative",
  },
  description:
    "A community-driven organisation ending FGM and advancing the rights, dignity, and empowerment of women and girls in Somali communities.",
  keywords: ["FGM", "Ending FGM", "Somali communities", "Women empowerment", "Girls education", "NGO", "Bilis Initiative"],
  authors: [{ name: "Bilis Initiative" }],
  creator: "Bilis Initiative",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://billisaction.org",
    title: "Bilis Initiative | Ending FGM, Empowering Girls",
    description: "A community-driven organisation ending FGM and advancing the rights, dignity, and empowerment of women and girls in Somali communities.",
    siteName: "Bilis Initiative",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilis Initiative | Ending FGM, Empowering Girls",
    description: "A community-driven organisation ending FGM and advancing the rights, dignity, and empowerment of women and girls in Somali communities.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        playfair.variable,
        dmSans.variable,
        "font-sans",
        geist.variable
      )}
    >
      <body className="min-h-full flex flex-col font-sans bg-cream text-earth">
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-[100] -translate-y-20 rounded-sm bg-terra px-4 py-3 text-sm font-medium text-white opacity-0 transition focus:translate-y-0 focus:opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
        >
          Skip to main content
        </a>
        <Navbar />
        <div className="h-1 w-full bg-linear-to-r from-terra-dark via-terra to-gold" aria-hidden="true" />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
