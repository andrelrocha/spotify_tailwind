import Image from 'next/image'
import { LayoutList, Laptop2, Maximize2, Mic2, Play, Repeat, SkipBack, SkipForward, Shuffle, Volume} from 'lucide-react'

export function Footer() {
    return(
        <footer className="bg-zinc-900 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3 mr-14">
                <Image src="/joji.png" width={56} height={56} alt="capa joji"/>
                <div className="flex flex-col">
                    <strong className="font-normal">Sanctuary</strong>
                    <span className="text-xs text-zinc-400">Joji</span>
                </div>
            </div>

            <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-6">
                    <Shuffle width={20} className="text-zinc-200"/>
                    <SkipBack width={20} className="text-zinc-200"/>
                    <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-white text-black">
                        <Play />
                    </button>
                    <SkipForward width={20} className="text-zinc-200"/>
                    <Repeat width={20} className="text-zinc-200"/>
                </div>

                <div className="flex items-center gap-2">
                    <span className="text-xs text-zinc-400">0:56</span>
                    <div className="h-1 w-96 rounded-full bg-zinc-600">
                    <div className=" h-1 w-40 rounded-full bg-zinc-200"></div>
                    </div>
                    <span className="text-xs text-zinc-400">2:13</span>
                </div>
            </div>
            
            <div className="flex items-center gap-4">
                <Mic2 size={17}/> 
                <LayoutList size={17}/> 
                <Laptop2 size={17}/>
                <div className="flex items-center gap-2">
                    <Volume size={17}/>
                    <div className="h-1 w-20 rounded-full bg-zinc-600">
                    <div className=" h-1 w-10 rounded-full bg-zinc-200"></div>
                    </div>
                </div>
                <Maximize2 size={17}/>
            </div>
      </footer>
    )
}