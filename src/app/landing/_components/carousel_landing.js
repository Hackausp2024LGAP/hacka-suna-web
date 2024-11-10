"use client"

import Image from "next/image";
import { Card, CardContent} from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function Carousel_() {
    return (
        <Carousel className="w-full flex flex-row items-center justify-center self-stretch" opts={{loop: true,}} plugins={[Autoplay({delay:5000}),]}>
            <CarouselContent className="w-full">
                {Array.from({length:5}).map((_, index) => (
                <CarouselItem key={index} className="w-[200px] h-[200px] md:basis-1/6 lg:basis-1/3">
                    <Card className="h-full">
                        <CardContent className="flex h-full items-center aspect-auto justify-center p-6">
                            <Image
                                key={index}
                                src={`/assets/images/eletrodom/${index}.webp`}
                                width={200}
                                height={200}
                                alt="Eletrodomesticos"
                            />
                        </CardContent>
                    </Card>
                </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}