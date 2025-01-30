"use client";

import { Card, cardVariant } from "@/components/atoms/card/card";
import { fetches, FetchesKey } from "@/lib/fetch-mapping";
import { createChunk } from "@/lib/utils";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ItemsPage({ category }: { category: string }) {
  const pathname = usePathname();

  const { data } = useSuspenseQuery({
    queryKey: [category],
    queryFn: fetches[category as FetchesKey],
  });

  const chunks = createChunk(data);

  if (!chunks.length || !chunks[0].length)
    return (
      <ul className="grid grid-cols-5 gap-3 w-full">
        {Array.from({ length: 20 }).map((_, index) => (
          <li key={index} className="aspect-square">
            <div className={cardVariant({ className: "h-full" })} />
          </li>
        ))}
      </ul>
    );

  return (
    <>
      {chunks.map((chunk, index) => (
        <ul
          key={index}
          className="grid snap-center  basis-[100%] shrink-0  grid-cols-5 gap-3 "
        >
          {chunk.map((equipment) => (
            <li key={equipment.id}>
              <Link href={`/${category}/${equipment.id}`}>
                <Card
                  aria-current={
                    Number(pathname.split("/")[2]) === equipment.id
                      ? "page"
                      : undefined
                  }
                  className="aria-page:ring-offset-white aria-page:ring-white"
                >
                  <Image
                    src={equipment.image}
                    alt={equipment.name}
                    width={50}
                    height={50}
                    loading="lazy"
                    className="size-full rounded-xs"
                  />
                </Card>
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </>
  );
}
