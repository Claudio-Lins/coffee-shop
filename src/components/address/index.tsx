import Image from "next/image";
import map from "/public/map.png";

export function Address() {
  return (
    <section
      id="address"
      className="min-h-screen scroll-my-20 bg-cover bg-center w-full text-white flex flex-col items-center justify-start py-12 px-0"
    >
      <h3 className="uppercase font-bold text-3xl text-coffee text-center mb-10">
        Our<span className="text-white ml-2">Address</span>
      </h3>
      <div className="w-full flex items-center justify-center h-[400px] relative bg-red-400 overflow-hidden ">
        <Image
          src={map}
          alt="Map"
          layout="responsive"
          width={800}
          height={400}
        />
      </div>
      <address className="flex items-center space-x-2">
        <p className="text-white text-center mt-10">
          1234 Coffee Street - Coffee City, Coffee State | Coffee Country <br />
          <a href="tel:+1234567890" className="text-coffee">
            +1 234 567 890
          </a>
        </p>
      </address>
    </section>
  );
}
