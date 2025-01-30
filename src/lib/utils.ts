import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function mergeClasses(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const API_URL = process.env.NEXT_PUBLIC_API_URL!;

export const createChunk = <T>(data: T[]): T[][] => {
  const CHUNK_SIZE = 20;
  const chunks: T[][] = [];

  for (let i = 0; i < data.length; i += CHUNK_SIZE) {
    chunks.push(data.slice(i, i + CHUNK_SIZE));
  }

  return chunks;
};
