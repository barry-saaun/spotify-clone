import * as React from 'react'
import { currentTime } from '@/lib/utils'
import Card from '@/components/card'

import { CardItems } from '@/types'

import { cn } from '@/lib/utils'

const MainLibrary:React.FC<CardItems> = ({items}) => {
  return (
    <main className={cn('flex flex-col container mx-5 md:mx-10 my-5 md:my-8 gap-5')}>
      <h1 className='text-foreground text-xl md:text-3xl lg:text-4xl font-semibold'>Good {currentTime()}</h1>
      <div className='container mx-auto grid grid-cols-2 grid-rows-3 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2 gap-2 '>
        {items.map((item, index) => (
        <Card key={index} title={item.title} name={item.name} alt={item.alt} imgSrc={item.imgSrc} />
        ))}

      </div>
    </main>
  )
}

export default MainLibrary
