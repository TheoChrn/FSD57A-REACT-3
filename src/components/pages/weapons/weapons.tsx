"use client";

import { Card } from "@/components/atoms/card/card";
import { getWeapons } from "@/lib/fetch";
import { useSuspenseQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function WeaponsPage() {
  const pathname = usePathname();
  const { data: chunks } = useSuspenseQuery({
    queryKey: ["weapons"],
    queryFn: getWeapons,
  });

  return (
    <>
      {chunks.map((chunk, index) => (
        <ul
          key={index}
          className="grid snap-center not-first:pl-1 basis-[100%] shrink-0  grid-cols-[repeat(5,1fr)] gap-3 aspect-[5/4] "
        >
          {chunk.map((equipment) => (
            <li key={equipment.id}>
              <Link href={`/weapons/${equipment.id}`}>
                <Card
                  aria-current={
                    pathname.includes(String(equipment.id)) ? "page" : undefined
                  }
                  className="aria-page:ring-offset-white"
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
