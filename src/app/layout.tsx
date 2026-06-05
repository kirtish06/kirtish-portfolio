import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kirtish Chaturvedi | Frontend & Full Stack Developer",
  description:
    "Portfolio of Kirtish Chaturvedi — Frontend & Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Frontend Developer", "Full Stack Developer", "React", "Next.js", "Kirtish Chaturvedi"],
  authors: [{ name: "Kirtish Chaturvedi" }],
  openGraph: {
    title: "Kirtish Chaturvedi | Frontend & Full Stack Developer",
    description: "Building clean, responsive UIs and real-world web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}