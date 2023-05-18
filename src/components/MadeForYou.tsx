import Image from 'next/image'

export function MadeForYou() {
    return(
        <a href="" className="bg-white/5 p-3 rounded-md flex flex-col gap-1.5 hover:bg-white/10">
            <Image src="/joji.png" className="w-full" width={110} height={110} alt="capa joji"/>
            <strong className="font-semibold">Daily Mix</strong> 
            <span className="text-sm text-zinc-400">Joji, Mac Miller, Kendrick Lamar and more</span>
        </a>
    )
}