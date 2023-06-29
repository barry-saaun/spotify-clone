import Navbar from '@/components/navbar'
import MainLibrary from '@/components/main-library'

import { NavItems } from '@/config/list'
import { LibraryCardItems } from '@/config/list'

export default function Home() {
  return (
    <main className="w-full h-[200vh] min-h-screen flex  bg-black   ">
      <div className="  md:ml-20 lg:ml-24 flex-1 flex-col bg-background">
        <Navbar items={NavItems} />
        <MainLibrary items={LibraryCardItems} />
      </div>
    </main>
  )
}
