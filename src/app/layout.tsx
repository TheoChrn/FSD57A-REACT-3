import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Providers from "@/providers/providers";
import { Wrapper } from "@/components/atoms/containers/wrapper";
import { IconLink } from "@/components/atoms/buttons/icon-link";
import Image from "next/image";
import { ButtonLink } from "@/components/atoms/buttons/button-link";
import { SwordIcon } from "@/components/atoms/icons/sword-icon";
import { Container } from "@/components/atoms/containers/container";
import { Header } from "@/components/organisms/header";

const hyliaSerif = localFont({
  src: "../fonts/HyliaSerifBeta-Regular.otf",
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
      <body
        className={`${hyliaSerif.variable} antialiased overscroll-none bg-[url('/images/botw-map.png')] bg-top  bg-no-repeat bg-cover min-h-screen`}
      >
        <Providers>
          <Container size="lg">
            <Wrapper className="">
              <Container>
                <Header />
                {children}
              </Container>
              <Container>
                <Image
                  width={100}
                  height={100}
                  unoptimized
                  src="/images/link.gif"
                  alt="gif of Link from zelda breath of the wild"
                  className="mx-auto size-60"
                />
              </Container>
            </Wrapper>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
