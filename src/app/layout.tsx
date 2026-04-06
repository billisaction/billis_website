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
    url: "https://bilis-initiative.org",
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
        <Navbar />
        <div className="h-1 w-full bg-gradient-to-r from-terra-dark via-terra to-gold"></div>
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
