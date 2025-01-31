import { Card } from "@/components/atoms/card/card";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PiHeartFill } from "react-icons/pi";

export function ItemCardLink({
  equipment: item,
}: {
  equipment: CategorySchema;
}) {
  const pathname = usePathname();
  return (
    <Card
      aria-current={
        Number(pathname.split("/")[2]) === item.id ? "page" : undefined
      }
      className="relative aria-page:ring-offset-white aria-page:ring-white"
    >
      {item.favorites && (
        <PiHeartFill className="fill-red-600 absolute right-1 top-1" />
      )}
      <Image
        src={item.image}
        alt={item.name}
        width={50}
        height={50}
        loading="lazy"
        className="size-full rounded-xs"
      />
    </Card>
  );
}
