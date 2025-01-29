import { Container } from "@/components/atoms/containers/container";
import { Wrapper } from "@/components/atoms/containers/wrapper";
import { Header } from "@/components/organisms/header";
import Providers from "@/providers/providers";
import type { Metadata } from "next";
import localFont from "next/font/local";
import Image from "next/image";
import "./globals.css";
import { Card } from "@/components/atoms/card/card";

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
            <Wrapper className="gap-2 md:gap-6 flex flex-col md:flex-row">
              <Container className="md:w-1/2 space-y-4 md:space-y-0">
                <Header />
                <main>{children}</main>
              </Container>
              <Container className="relative md:w-1/2 flex-1 flex flex-col gap-4 py-3">
                <Image
                  width={50}
                  height={50}
                  unoptimized
                  src="/images/link.gif"
                  alt="gif of Link from video game Zelda Breath Of The Wild"
                  className="hidden md:inline md:absolute w-full top-0"
                />
                <Card
                  id="details"
                  className="flex h-1/2 flex-col z-[1] mt-auto px-4 py-2 text-white"
                />
              </Container>
            </Wrapper>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
