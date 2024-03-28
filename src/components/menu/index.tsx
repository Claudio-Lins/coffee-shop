import { MenuCard } from "./menu-card";

export function Menu() {
  return (
    <section
      id="menu"
      className="min-h-screen scroll-my-16 bg-cover bg-center w-full text-white flex flex-col items-center justify-start py-12 px-36"
    >
      <h3 className="uppercase font-bold text-3xl text-coffee text-center mb-10">
        Menu
      </h3>
      <div className="w-full flex flex-wrap justify-center gap-4 ">
        <MenuCard
          title="Café Expresso"
          originalPrice={20.99}
          discountPrice={15.99}
          image="/coffee-imgs/menu-1.png"
        />
        <MenuCard
          title="Café Expresso"
          originalPrice={20.99}
          discountPrice={15.99}
          image="/coffee-imgs/menu-6.png"
        />
        <MenuCard
          title="Café Expresso"
          originalPrice={20.99}
          discountPrice={15.99}
          image="/coffee-imgs/menu-1.png"
        />
        <MenuCard
          title="Café Expresso"
          originalPrice={20.99}
          discountPrice={15.99}
          image="/coffee-imgs/menu-6.png"
        />
        <MenuCard
          title="Café Expresso"
          originalPrice={20.99}
          discountPrice={15.99}
          image="/coffee-imgs/menu-1.png"
        />
        <MenuCard
          title="Café Expresso"
          originalPrice={20.99}
          discountPrice={15.99}
          image="/coffee-imgs/menu-6.png"
        />
      </div>
    </section>
  );
}
