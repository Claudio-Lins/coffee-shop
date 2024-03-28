import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "../ui/button";

interface MenuCardProps {
  title: string;
  originalPrice: number;
  discountPrice: number;
  image: string;
}

export function MenuCard({
  title,
  originalPrice,
  discountPrice,
  image,
}: MenuCardProps) {
  return (
    <Card className="w-full max-w-xs bg-transparent">
      <CardContent className="flex items-center w-full flex-col justify-center py-6 hover:bg-white hover:overflow-hidden rounded-lg group">
        <div className="w-full flex items-center justify-center">
          <Image
            src={image}
            alt="Café"
            width={80}
            height={80}
            className="rounded-lg overflow-hidden bg-cover group-hover:scale-110 transition-transform duration-300 ease-in-out"
          />
        </div>
        <p className="text-white font-bold mt-2 group-hover:text-zinc-950">
          {title}
        </p>
        <div className="flex items-center space-x-2 mt-4">
          <span className="text-white group-hover:text-zinc-950">
            {new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
            }).format(discountPrice)}
          </span>
          <span className="text-zinc-500 text-xs font-light line-through">
            {new Intl.NumberFormat("pt-PT", {
              style: "currency",
              currency: "EUR",
            }).format(originalPrice)}
          </span>
        </div>
        <Button className="bg-coffee mt-4">Adicionar</Button>
      </CardContent>
    </Card>
  );
}
