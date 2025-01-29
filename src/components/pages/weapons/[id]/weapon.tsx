"use client";

import { Portal } from "@/components/atoms/portal/portal";
import { getWeaponById } from "@/lib/fetch";
import { useSuspenseQuery } from "@tanstack/react-query";

export function Weapon({ id }: { id: string }) {
  const {
    data: { data: weapon },
  } = useSuspenseQuery({
    queryKey: ["weapon", id],
    queryFn: () => getWeaponById(id),
  });

  return (
    <Portal key={id} selector="details">
      <h2 className="text-xl pb-1 border-b-1">{weapon.name}</h2>
      <ul>
        {Object.entries(weapon.properties).map(([key, value]) => (
          <li>
            {key}: {value}
          </li>
        ))}
      </ul>
      <p className="flex-1 orverflow-auto text-sm">{weapon.description}</p>
    </Portal>
  );
}
