import Image from 'next/image'
import { Play } from 'lucide-react'

export function GoodMorning() {
    return (
        <a href='' className="bg-white/5 group rounded flex items-center gap-5 overflow-hidden hover:bg-white/10 transition-colors">
            <Image src="/joji.png" width={100} height={80} alt="capa joji"/>
            <strong>Nectar</strong>
            <button className="w-10 h-10 flex justify-center items-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
            </button>
        </a>
    )
}
