import { cva, type VariantProps } from "class-variance-authority";

import { mergeClasses } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "",
      },
      size: {
        default: "px-3 py-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <button
    className={mergeClasses(buttonVariants({ variant, size, className }))}
    {...props}
  />
);

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
