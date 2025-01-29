import Image from "next/image";

type CardProps = {
  equipment: IEquipmentSchema;
};

export function Card({ equipment }: CardProps) {
  return (
    <article className="border-2  overflow-hidden bg-background/50 rounded-xs border-double border-black/80">
      <Image
        src={equipment.image}
        alt={equipment.name}
        width={50}
        height={50}
        loading="lazy"
        className="size-full"
      />
    </article>
  );
}
