"use client";

import { Container } from "@/components/atoms/containers/container";
import { Paragraph } from "@/components/atoms/paragraph";
import { Title } from "@/components/atoms/title/title";
import { getWeaponById } from "@/lib/fetch";
import { getQueryClient } from "@/lib/getQueryClient";
import { useFavoritesStore } from "@/providers/favorites-store-provider";
import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { PiHeartStraightFill } from "react-icons/pi";

export function Weapon({ id }: { id: string }) {
  const queryClient = getQueryClient();
  const { favorites } = useFavoritesStore((state) => state);

  const isInFavs = favorites.includes(Number(id));

  const { data: weapon } = useSuspenseQuery({
    queryKey: ["weapon", id],
    queryFn: () => getWeaponById(id),
    staleTime: Infinity,
  });

  const { mutate } = useMutation({
    mutationFn: async () => {
      await queryClient.cancelQueries({ queryKey: ["weapon"] });

      const optimisticWeapon = queryClient.setQueryData(
        ["weapon", id],
        (old: IEquipmentSchema) => {
          return {
            ...old,
            favorites: true,
          };
        }
      );

      console.log(optimisticWeapon);

      return optimisticWeapon;
    },
    onSuccess: (result) => {
      queryClient.setQueryData(["weapon", id], result);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <>
      <Container className="flex gap-3 items-center pb-1 border-b-1 ">
        <Title>{weapon.name}</Title>
        <button onClick={() => mutate()} className="cursor-pointer">
          <PiHeartStraightFill
            size={20}
            aria-checked={isInFavs}
            className="hover:scale-102 active:scale-98 aria-checked:fill-red-500 duration-200 transition-all stroke-10 stroke-white fill-transparent aria-checked:stroke-red-500"
          />
        </button>
      </Container>

      <ul>
        {Object.entries(weapon.properties).map(([key, value]) => (
          <li key={key}>
            {key}: {value}
          </li>
        ))}
      </ul>
      <Paragraph>{weapon.description}</Paragraph>
    </>
  );
}
