import { mergeClasses } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

export const containerVariant = cva("", {
  variants: {
    size: {
      "2xs": "p-2",
      xs: "p-3",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    },
  },
});

interface ContainerProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof containerVariant> {}

export function Container({ className, size, ...props }: ContainerProps) {
  return (
    <div
      className={mergeClasses(containerVariant({size, className}))}
      {...props}
    />
  );
}
