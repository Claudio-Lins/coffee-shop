import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-[calc(100vh)] bg-hero bg-cover bg-center w-full text-white flex items-center justify-start px-36"
    >
      <div className="flex flex-col justify-between space-y-6 w-full max-w-md mt-12">
        <h1 className="font-bold text-3xl">
          Building a Landing Page in Less Than 2 Hours: The Practicality of
          Next.js + Tailwind CSS + Shadcn/ui with Strapi CMS.
        </h1>
        <p className="text-white font-light tracking-wide text-sm leading-relaxed">
          Discover how easy and fast it is to create a high-quality landing page
          using the powerful combination of Next.js, Tailwind CSS, and
          Shadcn/ui, all managed seamlessly with Strapi CMS. With these tools,
          you can create an elegant and responsive design in a matter of
          minutes, saving time and effort in development. Try it now and see how
          simple it is to turn your ideas into digital reality efficiently and
          professionally.
        </p>
        <Button asChild className="bg-coffee">
          <a href="https://claudiolins.dev" target="_blank">
            More about
          </a>
        </Button>
      </div>
    </section>
  );
}
