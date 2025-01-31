import { mergeClasses } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

const itemsContainerVariant = cva("grid grid-cols-5 grid-rows-4 gap-3");

export function ItemsContainer({
  className,
  ...props
}: ComponentPropsWithoutRef<"ul">) {
  return (
    <ul
      className={mergeClasses(itemsContainerVariant({ className }))}
      {...props}
    />
  );
}
