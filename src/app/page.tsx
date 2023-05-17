import Image from 'next/image'
import { Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"/>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
            <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>

          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <HomeIcon/>
              Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Search/>
              Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-200">
              <Library/>
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Rap</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Br</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Rock</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Reggae</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Metal</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Indie</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Brega</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Forró</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Pop</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Trap</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Cumbia</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">My top hits</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">This is Green Day</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100 ">Meteoros e Areolitos</a>
          </nav>
        </aside>
        
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
            <a href='' className="bg-white/10 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href='' className="bg-white/10 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/20 transition-colors">
              <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
              <strong>Nectar</strong>
              <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>

          <h2 className="font-semibold text-2xl mt-10">Made for Andre</h2>

          <div className="grid grid-cols-6 gap-4 mt-4">
            <div className="bg-white/5 p-2 rounded">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
            </div>
            <div className="bg-white/5 p-2 rounded">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
            </div>
            <div className="bg-white/5 p-2 rounded">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
            </div>
            <div className="bg-white/5 p-2 rounded">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
            </div>
            <div className="bg-white/5 p-2 rounded">
              <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
            </div>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
