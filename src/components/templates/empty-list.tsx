import { cardVariant } from "@/components/atoms/card/card";

export function EmptyList() {
  return (
    <ul className="grid grid-cols-5 grid-rows-4 gap-3 w-full">
      {Array.from({ length: 20 }).map((_, index) => (
        <li key={index} className="aspect-square">
          <div className={cardVariant({ className: "h-full" })} />
        </li>
      ))}
    </ul>
  );
}
