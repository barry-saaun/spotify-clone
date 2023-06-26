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
    <nav className={cn('  bg-slate-700  h-10 mx-10 w-[100vw] flex flex-row justify-between')}>
      <div className='z-10 flex items-center justify-start '>
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
      <div className='z-10 flex items-center justify-end    '>
        {second.map((item, index) => {
          const Icon = Icons[item.icon]
          return (
        <Link key={index} href={item.href} className={cn('flex mx-1 hover:scale-[1.15] duration-75')} >
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
