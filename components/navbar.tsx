import * as React from 'react'
import Link from 'next/link'
import { Icons } from '@/components/ui/icons'
import { Button } from './ui/button'
import { NavbarItems } from '@/types/index'

import { cn } from '@/lib/utils'

interface NavbarProps {
  items: NavbarItems[]
}

const Navbar = ({ items }: NavbarProps) => {
  const first = items.slice(0,2)
  const second = items.slice(2)
  return (
    <nav className={cn('max-w-full sticky top-0 bg-slate-500 h-10  w-full flex flex-row justify-between backdrop-blur-sm md:backdrop-blur-lg rounded-t-lg ')}>
      <div className='z-20 flex items-center justify-start '>
        {first.map((item, index) => {
          const Icon = Icons[item.icon]
          return (
          <Link href={item.href} key={index} className={cn('flex mx-1 ')}>
              <Button variant='navigate' size='sm' className='rounded-full' >
                <Icon />
              </Button>
            </Link>
          )
        })}

      </div>
      <div className='z-20 flex items-center justify-end'>
        {second.map((item, index) => {
          const Icon = Icons[item.icon]
          return (
        <Link key={index} href={item.href} className={cn('flex mx-1 hover:scale-[1.10] duration-75')} >
            <Button variant='navigate' size='sm' className='rounded-full '  >
                <Icon className='opacity-75 hover:opacity-100 ' /> 
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
