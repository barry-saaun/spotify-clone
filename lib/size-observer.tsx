'use client'
import * as React from 'react'
import { useState, useEffect } from 'react'

interface Props {
  children?: React.ReactNode
}

const SizeObserver: React.FC = ({ children }: Props) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  const mobileWidthSize = window.innerWidth

  return <>{isMobile ? children : null}</>
}

export default SizeObserver
