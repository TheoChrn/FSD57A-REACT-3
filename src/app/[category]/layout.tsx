import { Card } from "@/components/atoms/card/card";
import { Container } from "@/components/atoms/containers/container";

export default function CategoryLayout(props: {
  children: React.ReactNode;
  details: React.ReactNode;
}) {
  return (
    <>
      <Container className="flex  flex-nowrap p-3 gap-1 overflow-x-auto snap-x snap-proximity">
        {props.children}
      </Container>
      <Card className="flex flex-col gap-1 md:h-1/2 md:self-end px-4 py-2 text-white">
        {props.details}
      </Card>
    </>
  );
}
