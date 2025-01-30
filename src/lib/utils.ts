import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const createChunk = <T>(data: T[], chunkSize = 20): T[][] => {
  return Array.from(
    { length: Math.ceil(data.length / chunkSize) },
    (_, index) => data.slice(index * chunkSize, (index + 1) * chunkSize)
  );
};
