import Image from 'next/image'
import { ChevronLeft, ChevronRight, Play} from 'lucide-react'
import { Sidebar } from '@/components/Sidebar'
import { Footer } from '@/components/Footer'

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
            <a href='' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Andre</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-1.5 hover:bg-white/10">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
              <strong className="font-semibold">Daily Mix</strong> 
              <span className="text-sm text-zinc-400">Joji, Mac Miller, Kendrick Lamar and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-1.5 hover:bg-white/10">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
              <strong className="font-semibold">Daily Mix</strong> 
              <span className="text-sm text-zinc-400">Joji, Mac Miller, Kendrick Lamar and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-1.5 hover:bg-white/10">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
              <strong className="font-semibold">Daily Mix</strong> 
              <span className="text-sm text-zinc-400">Joji, Mac Miller, Kendrick Lamar and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-1.5 hover:bg-white/10">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
              <strong className="font-semibold">Daily Mix</strong> 
              <span className="text-sm text-zinc-400">Joji, Mac Miller, Kendrick Lamar and more</span>
            </a>
            <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-1.5 hover:bg-white/10">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
              <strong className="font-semibold">Daily Mix</strong> 
              <span className="text-sm text-zinc-400">Joji, Mac Miller, Kendrick Lamar and more</span>
            </a>
          </div>
        </main>
      </div>

      <Footer/>
    </div>
  )
}
