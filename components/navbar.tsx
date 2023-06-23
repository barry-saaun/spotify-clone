import * as React from 'react'
import Link from 'next/link'
import { Icons } from '@/components/ui/icons'
import { Button } from './ui/button'
import { NavbarProps } from '@/types/index'
import { items } from '@/config/navbar'

import { cn } from '@/lib/utils'
const Navbar: React.FC<NavbarProps> = ({ items }) => {
  return (
    <nav className={cn('container mx-auto w-[100vw] flex flex-row')}>
      <div className={cn('flex items-center justify-between w-full')}>
        {items.map((item, index) => {
          const Icon = Icons[item.icon]
          return (
            <Link key={index} href={item.href}>
              <Button variant="default">
                <Icon />
              </Button>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
export default Navbar
