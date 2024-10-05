import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatIDR(price: number) {
  const formatted = new Intl.NumberFormat('ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);

  return formatted;
}

export function formatSnakeCase(str: string) {
  const splitString = str.split('_').map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase());
  return splitString.join(' ');
}
