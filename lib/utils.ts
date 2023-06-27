import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function currentTime(): string {
  const hour:number = new Date().getHours()
  let greeting = ''
  if (hour > 6 && hour < 12) {
    greeting = "Morning";
    return greeting;
  } else if (hour >= 12 && hour < 18) {
    greeting = "Afternoon";
    return greeting;
  } else if ((hour > 19 && hour < 24) || (hour > 0 && hour < 6)) {
    greeting = "Evening";
    return greeting;
  }
  return greeting;
}

