import Image from "next/image";
import { Cart } from "./cart";
import { NavLinks } from "./nav-links";
import { SearchInput } from "./search";

export function Header() {
  return (
    <div className="w-full z-50 flex items-center justify-center fixed top-0 pt-4 border-b border-zinc-800 pb-4 bg-zinc-950">
      <div className="w-full max-w-6xl flex items-center justify-between">
        <div className="">
          <a href="#home">
            <Image
              src="/coffee-imgs/logo.png"
              alt="logo"
              width={60}
              height={60}
            />
          </a>
        </div>
        <div className="">
          <NavLinks />
        </div>
        <div className="flex items-center space-x-4">
          <SearchInput />
          <Cart />
        </div>
      </div>
    </div>
  );
}
