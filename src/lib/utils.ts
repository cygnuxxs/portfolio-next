import { type ClassValue, clsx } from "clsx"
import { StaticImageData } from "next/image"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toTitleCase(str : string) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export interface ServiceProps {
  title : string
  description : string
  icon : any
}

export interface ProjectProps {
  title : string
  description : string
  image : StaticImageData
  tech : string
  link : string
}