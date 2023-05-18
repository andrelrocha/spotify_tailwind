import {Home as HomeIcon, Library, Search} from 'lucide-react'

export function Sidebar() {
    return(
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
    )
}