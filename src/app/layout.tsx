import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbarz from "@/components/navbar";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus THY Rapper - Official Website",
  description:
    "Explore Marcus THY Rapper's music, videos, and more. Stay updated with the latest releases and content from one of Kenya's top rappers.",
  keywords:
    "Marcus THY Rapper, thy rapper, marcusthyrapper, rappers in eldy, rappers in eldoret, rappers in kenya, kenyan rappers, marcus thy rapper official website, thy rapper official website, marcus thy rapper music, marcus thy rapper videos, marcus thy rapper songs, marcus thy rapper albums, marcus thy rapper singles, marcus thy rapper discography, marcus thy rapper biography, marcus thy rapper news, marcus thy rapper updates, marcus thy rapper social media, THY, shiro thy, thy shiro, hip hop kenya, kenyan hip hop artist",
  openGraph: {
    title: "Marcus THY Rapper - Official Website",
    description:
      "Explore Marcus THY Rapper's music, videos, and more. Stay updated with the latest releases and content from one of Kenya's top rappers.",
    url: "https://marcusthyrapper.vercel.app",
    images: [
      {
        url: "/images/pwa/screenshot2.jpg",
        width: 1080,
        height: 540,
        alt: "Marcus THY Rapper - Official Website",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Marcus THY Rapper - Official Website",
    description:
      "Explore Marcus THY Rapper's music, videos, and more. Stay updated with the latest releases and content from one of Kenya's top rappers.",
    images: ["/images/pwa/screenshot2.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SpeedInsights />

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Video Background */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          <video
            className="w-full h-full object-cover"
            src="/test.mp4"
            autoPlay
            loop
            muted
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/50" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col min-h-screen">
          {/* Navbar */}
          <div className="fixed top-0 left-0 w-full z-10">
            <Navbarz />
          </div>

          {/* Scrollable Content */}
          <main className="flex-grow w-full z-0 px-0 py-8 md:px-8 md:py-12">
            {children}
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
