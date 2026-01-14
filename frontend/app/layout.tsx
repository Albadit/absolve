import type { Metadata } from "next";
import { Cinzel, Crimson_Text } from "next/font/google";
import { AudioProvider } from "@/components/AudioProvider";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Absolve | There Is No Mercy Here",
  description: "Enter a world of dark fantasy and gothic horror. Only the strong endure. Absolution is earned in blood.",
  keywords: ["dark fantasy", "game", "gothic", "horror", "action RPG"],
  openGraph: {
    title: "Absolve | There Is No Mercy Here",
    description: "Enter a world of dark fantasy and gothic horror. Only the strong endure.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${crimsonText.variable} antialiased`}
      >
        <AudioProvider>
          <div className="film-grain" aria-hidden="true" />
          <div className="vignette" aria-hidden="true" />
          {children}
        </AudioProvider>
      </body>
    </html>
  );
}
