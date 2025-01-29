import Providers from "@/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
