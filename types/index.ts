import { Icons } from '@/components/ui/icons'
import { StaticImageData } from 'next/image'

export type NavbarItems = {
  href: string
  icon?: keyof typeof Icons
  disbaled?: boolean
}

export type CardProps = {
  title?: string
  name?: string
  alt: string
}

export type CardItems = {
  items: CardProps[]
}
