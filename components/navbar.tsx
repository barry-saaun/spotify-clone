import * as React from 'react'
import Link from 'next/link'
import { Icons } from '@/components/ui/icons'
import { Button } from './ui/button'
import { NavbarItems } from '@/types/index'

interface NavbarProps {
  items: NavbarItems[]
}

import { cn } from '@/lib/utils'
const Navbar = ({ items }: NavbarProps) => {
  const first = items.slice(0,2)
  const second = items.slice(2)
  return (
    <nav className={cn('container mx-auto w-[100vw] flex flex-row')}>
      <div className='w-full flex-row items-start justify-center '>
        {first.map((item, index) => {
          const Icon = Icons[item.icon]
          return (
        <Link key={index} href={item.href}>
            <Button>
                <Icon /> 
            </Button>
          </Link>
          )
        }
       )}
      </div>
    </nav>
  )
}
export default Navbar
