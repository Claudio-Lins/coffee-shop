import { About } from "@/components/about";
import { Address } from "@/components/address";
import { Customers } from "@/components/customers";
import { Hero } from "@/components/hero";
import { Menu } from "@/components/menu";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <Hero />
      <About />
      <Menu />
      <Customers />
      <Address />
      <footer className="w-full flex items-center justify-center space-x-4 py-10 border-t border-zinc-500">
        {/* copy right */}
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Coffee Shop - all rights reserved{" "}
          <a
            href="https://claudiolins.dev"
            target="_blank"
            className="text-coffee"
          >
            Claudio Lins
          </a>
        </p>
      </footer>
    </main>
  );
}
