"use client";

import { ItemCard } from "@/components/molecules/item-card";
import { getWeapons } from "@/lib/fetch";
import { useSuspenseQuery } from "@tanstack/react-query";
import Link from "next/link";

export function WeaponsPage() {
  const { data, isLoading, error } = useSuspenseQuery({
    queryKey: ["weapons"],
    queryFn: getWeapons,
    staleTime: Infinity,
  });

  const chunks = data.data;

  return (
    <>
      <div className="flex flex-nowrap p-3 gap-1 overflow-x-auto snap-x snap-proximity">
        {chunks.map((chunk, index) => (
          <ul
            key={index}
            className="grid snap-center not-first:pl-1 basis-[100%] shrink-0  grid-cols-[repeat(5,1fr)] gap-3 aspect-[5/4] "
          >
            {chunk.map((equipment) => (
              <li key={equipment.id}>
                <Link href={`/weapons/${equipment.id}`}>
                  <ItemCard equipment={equipment} />
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}
