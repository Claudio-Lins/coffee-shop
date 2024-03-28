"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function NavLinks() {
  return (
    <NavigationMenu>
      <NavigationMenuList className=" flext items-center justify-center space-x-6">
        <NavigationMenuItem className="hover:border-b border-white py-4 transition-all duration-200">
          <Link href="#home" legacyBehavior passHref>
            <NavigationMenuLink className="text-white ">
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:border-b border-white py-4 transition-all duration-200">
          <Link href="#about" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:border-b border-white py-4 transition-all duration-200">
          <Link href="#menu" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">Menu</NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:border-b border-white py-4 transition-all duration-200">
          <Link href="#ratting" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              Ratting
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem className="hover:border-b border-white py-4 transition-all duration-200">
          <Link href="#address" legacyBehavior passHref>
            <NavigationMenuLink className="text-white">
              Address
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
