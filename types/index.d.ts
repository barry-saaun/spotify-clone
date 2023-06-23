import * as React from 'react'
import { Icons } from '@/components/ui/icons'

export type NavbarProps = {
  items: {
    href: string
    icon: keyof typeof Icons
    disbled?: boolean
  }[]
}
