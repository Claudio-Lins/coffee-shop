import { Button } from "@/components/ui/button";
import Image from "next/image";

export function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-my-10 bg-cover bg-center w-full text-white flex flex-col items-center justify-start pt-24 px-36"
    >
      <h3 className="uppercase font-bold text-3xl text-coffee text-center mb-10">
        About <span className="text-white">Us</span>
      </h3>
      <div className="grid grid-cols-2">
        <Image
          src="/coffee-imgs/about-img.jpg"
          alt="about"
          width={800}
          height={800}
        />
        <div className="flex flex-col justify-center items-start space-y-4 w-full bg-zinc-900 px-8 py-12">
          <h3 className=" font-bold text-2xl text-white tracking-wider">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h3>
          <p className="text-white font-light tracking-wide text-sm leading-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            doloremque, sit, aspernatur quaerat tempora quas aliquam,
            consequuntur laboriosam voluptatibus libero obcaecati beatae ipsa
            omnis culpa corporis mollitia explicabo dolor commodi!
          </p>
          <Button asChild className="bg-coffee">
            <a href="https://claudiolins.dev" target="_blank">
              More about
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
