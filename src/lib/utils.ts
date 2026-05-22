import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const scrollToSection = (id: string) => {
  if (typeof window === 'undefined') return;

  const element = document.getElementById(id);
  if (!element) return;

  const top = element.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top, behavior: 'smooth' });
};