import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play} from 'lucide-react'
import { Footer } from '@/components/Footer'
import { Sidebar } from '@/components/Sidebar'
import { GoodMorning } from '@/components/GoodMorning'
import { MadeForYou } from '@/components/MadeForYou'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        
        <Sidebar/>
        
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft/>
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight/>
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-10">Good Morning</h1>

          <div className="grid grid-cols-3 gap-4 mt-4">
            <GoodMorning/>
            <GoodMorning/>
            <GoodMorning/>
            <GoodMorning/>
            <GoodMorning/>
            <GoodMorning/>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Andre</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <MadeForYou/>
            <MadeForYou/>
            <MadeForYou/>
            <MadeForYou/>
            <MadeForYou/>
          </div>
        </main>
      </div>

      <Footer/>
    </div>
  )
}
