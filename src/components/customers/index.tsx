import { CustomersCorousel } from "./customers-corousel";

export function Customers() {
  return (
    <section
      id="ratting"
      className="min-h-screen scroll-my-20 bg-cover bg-center w-full text-white flex flex-col items-center justify-start py-12 px-36"
    >
      <h3 className="uppercase font-bold text-3xl text-coffee text-center mb-10">
        Our<span className="text-white ml-2">Customers</span>
      </h3>
      <div className="w-full flex items-center justify-center ">
        <CustomersCorousel />
      </div>
    </section>
  );
}
