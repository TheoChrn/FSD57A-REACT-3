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
        className={`${hyliaSerif.className} antialiased overscroll-none bg-[url('/images/botw-map.png')] bg-top  bg-no-repeat bg-cover min-h-screen`}
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
