import { buttonVariants } from "@/components/atoms/button";
import { mergeClasses } from "@/lib/utils";
import { VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";

interface ButtonLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href">,
    LinkProps,
    VariantProps<typeof buttonVariants> {}

export const ButtonLink = ({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) => (
  <Link
    className={mergeClasses(buttonVariants({ variant, size, className }))}
    {...props}
  />
);
