import Providers from "@/providers/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hyliaSerif = localFont({
  src: "../../public/fonts/HyliaSerifBeta-Regular.otf",
  weight: "400",
  display: "swap",
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
      <body
        className={`${hyliaSerif.className} antialiased overscroll-none bg-[url('/images/botw-bg.webp')] bg-top  bg-no-repeat bg-cover `}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
