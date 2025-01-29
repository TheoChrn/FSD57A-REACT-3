"use client";

import { Card } from "@/components/atoms/card/card";
import Image from "next/image";

type ItemCardProps = {
  equipment: IEquipmentSchema;
};

export function ItemCard({ equipment }: ItemCardProps) {
  return (
    <Card>
      <Image
        src={equipment.image}
        alt={equipment.name}
        width={50}
        height={50}
        loading="lazy"
        className="size-full"
      />
    </Card>
  );
}
