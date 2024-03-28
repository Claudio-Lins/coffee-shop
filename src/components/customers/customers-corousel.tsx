"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

interface CustomersCorouselProps {
  name?: string;
  image?: string;
  text?: string;
}

const customersCorousel = [
  {
    name: "John Doe",
    image: "/coffee-imgs/pic-1.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    name: "Jane Doe",
    image: "/coffee-imgs/pic-2.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
  {
    name: "John Doe",
    image: "/coffee-imgs/pic-3.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatem.",
  },
];
export function CustomersCorousel({
  image,
  name,
  text,
}: CustomersCorouselProps) {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent className="">
        {customersCorousel.map((slide, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="bg-transparent border-none">
                <CardContent className="flex aspect-square items-center justify-center p-6 bg-transparent">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <Image
                      src={slide.image}
                      alt={slide.name}
                      width={200}
                      height={200}
                      className=" rounded-full"
                    />
                    <h4 className="text-xl font-bold text-coffee">
                      {slide.name}
                    </h4>
                    <p className="text-center text-white italic text-xs font-light tracking-wider">
                      {slide.text}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
