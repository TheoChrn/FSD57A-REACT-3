import { mergeClasses } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return (
    <article
      className={mergeClasses(
        className,
        "cursor-pointer  bg-black/40 rounded-xs ring-2 ring-offset-1 ring-black/80 ring-offset-background/50"
      )}
      {...props}
    />
  );
}
