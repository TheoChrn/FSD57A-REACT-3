import { Container } from "@/components/atoms/containers/container";
import { Paragraph } from "@/components/atoms/paragraph";
import { Title } from "@/components/atoms/title/title";
import { Details } from "@/components/templates/details";
import { PiHeartStraightFill } from "react-icons/pi";

export function ItemsDetails({
  item,
  onClick,
}: {
  item: CategorySchema;
  onClick: () => void;
}) {
  return (
    <>
      <Container className="flex gap-3 items-center pb-1 border-b-1 ">
        <Title>{item.name}</Title>
        <button onClick={onClick} className="cursor-pointer">
          <PiHeartStraightFill
            size={20}
            aria-checked={item.favorites}
            className="hover:scale-102 active:scale-98 aria-checked:fill-red-500 duration-200 transition-all stroke-10 stroke-white fill-transparent aria-checked:stroke-red-500"
          />
        </button>
      </Container>
      <Details data={item} />
      <Paragraph>{item.description}</Paragraph>
    </>
  );
}
