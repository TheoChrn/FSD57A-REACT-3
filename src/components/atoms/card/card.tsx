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
        "bg-black/40 rounded-xs ring-2 ring-offset-1 ring-black/40 ring-offset-background/30"
      )}
      {...props}
    />
  );
}
