import { mergeClasses } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Title({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return <h2 className={mergeClasses(className, "text-xl")} {...props} />;
}
