import { Container } from "@/components/atoms/containers/container";
import { Wrapper } from "@/components/atoms/containers/wrapper";
import { Header } from "@/components/organisms/header";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
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
        className={`${hyliaSerif.className} antialiased overscroll-none bg-[url('/images/botw-map.png')] bg-top  bg-no-repeat bg-cover `}
      >
        <Providers>
          <Container
            size="lg"
            className="md:flex md:items-center md:justify-center min-h-screen"
          >
            <Wrapper>
              <Header />
              <main className="relative grid md:grid-cols-2 h-fit gap-4">
                {children}
                <Image
                  width={50}
                  height={50}
                  unoptimized
                  src="/images/link.gif"
                  alt="gif of Link from video game Zelda Breath Of The Wild"
                  className="hidden md:inline md:absolute  md:w-1/2 bottom-0 -z-1 right-0"
                />
              </main>
            </Wrapper>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
