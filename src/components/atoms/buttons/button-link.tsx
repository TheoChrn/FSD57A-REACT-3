import { mergeClasses } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";

export const buttonVariants = cva(
  "inline-flex px-3 py-2 items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0"
);

interface ButtonLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href">,
    LinkProps,
    VariantProps<typeof buttonVariants> {}

export const ButtonLink = ({
  className,

  ...props
}: ButtonLinkProps) => (
  <Link className={mergeClasses(buttonVariants({ className }))} {...props} />
);
