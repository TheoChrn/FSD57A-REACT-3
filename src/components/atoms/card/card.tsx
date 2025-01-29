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
        "border-2 cursor-pointer  overflow-hidden bg-background/50 rounded-xs border-double border-black/80"
      )}
      {...props}
    />
  );
}
