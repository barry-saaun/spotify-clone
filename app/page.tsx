import Navbar from "@/components/navbar";
import {NavItems} from '@/config/list'

export default function Home() {
  return (
    <main className='w-[90vw] h-[200vh] min-h-screen flex bg-background pl-24 float-right'>
      <Navbar items={NavItems} />
    </main>
  )
}
