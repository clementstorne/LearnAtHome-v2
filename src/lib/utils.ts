import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 1) + "…";
  } else {
    return text;
  }
}
