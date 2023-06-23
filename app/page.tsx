import Navbar from "@/components/navbar";
import { items } from "@/config/navbar";

export default function Home() {
  return (
    <main className='w-[100vw] min-h-screen flex bg-play'>
      <Navbar items={items}/>
      
    </main>
  )
}
