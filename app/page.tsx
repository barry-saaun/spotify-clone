import Navbar from "@/components/navbar";
import {NavItems} from '@/config/list'

export default function Home() {
  return (
    <main className='w-[100vw] min-h-screen flex bg-play'>
      <Navbar items={NavItems} />
    </main>
  )
}
