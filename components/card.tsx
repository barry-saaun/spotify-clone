'use client'
import * as React from 'react'
import { useState, useEffect } from 'react'
import { CardProps } from '@/types'

import Image from 'next/image'

const Card: React.FC<CardProps> = ({ name, alt, title }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const handleResize = () => {
      const mobileWidth = window.innerWidth <= 768
      setIsMobile(mobileWidth)
    }
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="flex items-center  whitespace-nowrap  ">
      <div className="flex flex-row gap-2 justify-start items-center whitespace-nowrap bg-card hover:bg-card-hover hover:cursor-pointer transition-colors duration-75 rounded-sm h-14 md:h-20 min-w-[15rem] max-w-[22rem] lg:min-w-[20rem] lg:max-w-[20rem] ">
        {isMobile ? (
          <Image
            src={`/assets/${alt}.png`}
            alt={alt}
            className="object-contain"
            width={57}
            height={57}
          />
        ) : (
          <Image
            src={`/assets/${alt}.png`}
            alt={alt}
            className="object-contain rounded-l-md"
            height={79}
            width={79}
          />
        )}
        <h1 className="font-medium text-sm md:text-sm lg:text-lg">{title}</h1>
      </div>
    </div>
  )
}

export default Card
