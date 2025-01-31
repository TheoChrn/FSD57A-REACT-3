import { Container } from "@/components/atoms/containers/container";
import { Wrapper } from "@/components/atoms/containers/wrapper";
import { Header } from "@/components/organisms/header";
import Image from "next/image";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <Container
      size="lg"
      className="md:flex md:items-center md:justify-center min-h-screen"
    >
      <Wrapper className="w-full">
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
  );
}
