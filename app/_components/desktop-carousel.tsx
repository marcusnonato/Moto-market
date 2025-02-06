"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Image from "next/image";

function DesktopCarousel() {
  return (
    <Carousel
      className="hidden border-b-2 border-t-2 border-primary lg:block"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      opts={{ loop: true }}
    >
      <CarouselContent>
        <CarouselItem>
          <div className="relative h-[800px] w-full">
            <Image
              src="/yamaha-banner.avif"
              className="object-cover"
              alt="Banner"
              fill
            />
          </div>
        </CarouselItem>
        <CarouselItem>
          <div className="relative h-[800px] w-full">
            <Image
              src="/fazer-banner.avif"
              className="object-cover"
              alt="Banner"
              fill
            />
          </div>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}

export default DesktopCarousel;
