import { mergeClasses } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export function Paragraph({
  className,
  ...props
}: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={mergeClasses(className, "flex-1 orverflow-auto text-sm")}
      {...props}
    />
  );
}
