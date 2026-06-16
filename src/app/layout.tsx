import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kirtish Chaturvedi | Frontend & Full Stack Developer",
  description: "Portfolio of Kirtish Chaturvedi — Frontend & Full Stack Developer specializing in React, Next.js, and modern web technologies.",
  keywords: ["Frontend Developer", "Full Stack Developer", "React", "Next.js", "Kirtish Chaturvedi"],
  authors: [{ name: "Kirtish Chaturvedi" }],
  openGraph: {
    title: "Kirtish Chaturvedi | Frontend & Full Stack Developer",
    description: "Building clean, responsive UIs and real-world web applications.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}