"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ShoppingCartIcon } from "lucide-react";
import { Separator } from "../ui/separator";

export function Cart() {
  return (
    <Sheet>
      <SheetTrigger>
        <ShoppingCartIcon className="w-4 h-4 text-white" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ShoppingCart</SheetTitle>
          <Separator />
          <SheetDescription>
            This is your shopping cart
            <br />
            You can add or remove items from here
            <br />
            You can also see the total price of the items.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
