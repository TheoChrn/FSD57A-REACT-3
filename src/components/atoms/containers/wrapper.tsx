import { mergeClasses } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Wrapper({
  className,
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={mergeClasses(className, "max-w-screen-lg mx-auto")}
      {...props}
    />
  );
}
