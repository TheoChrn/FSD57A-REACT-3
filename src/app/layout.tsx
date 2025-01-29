import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/providers/providers";

const hyliaSerif = localFont({
  src: "./fonts/HyliaSerifBeta-Regular.otf",
  variable: "--font-hylia-serif",
  weight: "100, 200,300,400,500,600,700,800 900",
});

export const metadata: Metadata = {
  title: "FSD57A | REACT-3",
  description: "Cours 3wa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hyliaSerif.variable} antialiased overscroll-none`}>
        <Providers>
          <header>
            
          </header>
          {children}
          
          </Providers>
      </body>
    </html>
  );
}
