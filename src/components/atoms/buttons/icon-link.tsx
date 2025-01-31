"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithoutRef } from "react";

interface IconLinkProps
  extends Omit<ComponentPropsWithoutRef<"a">, "href">,
    LinkProps {}

export const IconLink = ({ ...props }: IconLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.includes(props.href.toString());

  return (
    <Link
      aria-current={isActive ? "page" : undefined}
      className="group  aria-page:after:bg-background"
      {...props}
    />
  );
};
