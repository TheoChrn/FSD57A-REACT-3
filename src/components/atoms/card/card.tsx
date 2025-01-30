import { mergeClasses } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

export const cardVariant = cva(
  "bg-black/50 rounded-xs ring-2 ring-offset-1 ring-black/40 ring-offset-background/30"
);

export function Card({
  className,
  ...props
}: ComponentPropsWithoutRef<"article">) {
  return (
    <article className={mergeClasses(cardVariant({ className }))} {...props} />
  );
}
