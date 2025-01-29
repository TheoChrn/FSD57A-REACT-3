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
            className="flex items-center justify-center min-h-screen"
          >
            <Wrapper className="md:flex md:gap-6 space-y-6 md:space-x-0">
              <Container className="flex-1 space-y-4">
                <Header />
                <main>{children}</main>
              </Container>
              <Container className="flex-1 space-y-4">
                <Image
                  width={100}
                  height={100}
                  unoptimized
                  src="/images/link.gif"
                  alt="gif of Link from video game Zelda Breath Of The Wild"
                  className="w-full mx-auto aspect-square max-w-60"
                />
                <div
                  id="details"
                  className="px-4 py-2 border border-double bg-black"
                ></div>
              </Container>
            </Wrapper>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
