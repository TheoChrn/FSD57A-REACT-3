"use client";

import { Card } from "@/components/templates/card";
import { getWeapons } from "@/lib/fetch";
import { useSuspenseQuery } from "@tanstack/react-query";

export function WeaponsPage() {
  const { data } = useSuspenseQuery({
    queryKey: ["weapons"],
    queryFn: getWeapons,
  });

  const chunks = data.data;

  return (
    <>
      <div className="flex flex-nowrap overflow-x-auto snap-x snap-proximity">
        {chunks.map((chunk, index) => (
          <ul
            key={index}
            className="grid snap-center not-first:pl-1 basis-[100%] shrink-0  grid-cols-[repeat(5,1fr)] gap-1 aspect-[5/4] "
          >
            {chunk.map((equipment) => (
              <li key={equipment.id}>
                <Card equipment={equipment} />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </>
  );
}
