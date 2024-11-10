import Image from "next/image";
import Link from "next/link";
import { Lema } from './_components/Lema';
import { Card, CardContent} from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel"

export function Landing() {
  return (
  <div className="bg-gradient-to-br from-cyan-500 to-indigo-500  h-screen w-full">
    <div className="h-5/6 w-full flex flex-col justify-center items-center">
      <Image
        src="/assets/images/reletrify_title.png"
        width={773/1.5}
        height={216/1.5}
      />
      <Lema />
      <p className="text-slate-100">Conheça Reletrify, os três R’s da sustentabilidade moderna.</p>
    </div>
    <Carousel>
      <CarouselContent></CarouselContent>
    </Carousel>
    <div className="flex justify-center items-end">
      <Link href="/app/" className="text-white outline outline-1 p-2 rounded-xl">Comece agora</Link>
    </div>
  </div>
  )
}
