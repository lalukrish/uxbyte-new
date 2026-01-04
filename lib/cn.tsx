// lib/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind + conditional classes safely
 * - Removes conflicting Tailwind classes
 * - Handles conditional logic cleanly
 */
export default function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
