import { ItemsContainer } from "@/components/atoms/containers/items-container";
import { ItemCardLink } from "@/components/molecules/item-card-link";
import Link from "next/link";

export function ItemsList({
  chunk,
  category,
}: {
  chunk: CategorySchema[];
  category?: string;
}) {
  return (
    <ItemsContainer className="snap-center basis-[100%] shrink-0 gap-3 ">
      {chunk.map((item) => (
        <li key={item.id}>
          <Link href={`/${category ?? "favorites"}/${item.id}`}>
            <ItemCardLink equipment={item} />
          </Link>
        </li>
      ))}
    </ItemsContainer>
  );
}
