"use client";

import { Container } from "@/components/atoms/containers/container";
import { Paragraph } from "@/components/atoms/paragraph";
import { Title } from "@/components/atoms/title/title";
import { ItemsDetails } from "@/components/organisms/items-details";
import { Details } from "@/components/templates/details";
import { getQueryClient } from "@/lib/getQueryClient";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { PiHeartStraightFill } from "react-icons/pi";

export default function FavoritePage({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const router = useRouter();
  const queryClient = getQueryClient();

  const {
    data: favoriteItem,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["favorites", id],
    queryFn: () => {
      const favorites: CategorySchema[] | undefined = queryClient.getQueryData([
        "favorites",
      ]);
      return favorites?.find((item) => item.id === Number(id)) ?? null;
    },
  });

  const { mutate } = useMutation({
    mutationFn: (data: CategorySchema) => {
      queryClient.setQueryData(["favorites"], (old: CategorySchema[] = []) => {
        const existingItemIndex = old.findIndex((item) => item.id === data.id);

        if (existingItemIndex !== -1)
          return old.filter((item) => item.id !== data.id);
      });
      return Promise.resolve(data);
    },

    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [favoriteItem?.category] });

      const previousFavorites: CategorySchema[] | undefined =
        queryClient.getQueryData(["favorites"]);

      return { previousFavorites };
    },
    onSuccess: (result) => {
      // Update Current Item
      queryClient.setQueryData([favoriteItem?.category, id], result);

      queryClient.removeQueries({ queryKey: ["favorites", id] });

      //Update items in list
      queryClient.setQueryData(
        [favoriteItem?.category],
        (old: CategorySchema[]) =>
          old.map((item) => (item.id === result.id ? result : item))
      );

      router.push("/favorites");
    },
    onError: (error, variables, context) => {
      queryClient.setQueryData(["favorites"], context?.previousFavorites);
    },
    onSettled: (data, variables, context) =>
      queryClient.invalidateQueries({ queryKey: ["favorites"] }),
  });

  if (isLoading) return "Loading...";

  if (error) return error.message;

  if (!favoriteItem) return "Item not found";

  return (
    <ItemsDetails
      item={favoriteItem}
      onClick={() =>
        mutate({
          ...favoriteItem,
          favorites: false,
        })
      }
    />
  );
}
