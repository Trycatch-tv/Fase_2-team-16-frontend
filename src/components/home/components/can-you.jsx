import Image from "next/image";
import Caja from "../../../../public/images/graficos/caja.png";
import Grafico from "../../../../public/images/graficos/grafico.png";
import User from "../../../../public/images/graficos/user.png";
export default function CanYou() {
  return (
    <>
      <h3 className=" mt-10  text-center text-gray-500 font-bold text-3xl  uppercase dark:text-gray-300">
        What can you do here
      </h3>
      <section className=" mt-10 lg:mt-10 w-full px-6 md:px-16  flex flex-wrap  text-secondary   h-auto md:flex-nowrap gap-3  mb-10 ">
        <div className="bg-base-100  text-center text-xl rounded lg:w-1/3 gap-2  text-secondary dark:text-gray-300 hover:bg-base-200 flex justify-center flex-col items-center w-full p-6 ">
          <Image
            className="m-auto pt-2 "
            src={Caja}
            alt="logo"
            width={150}
            height={150}
          />
          Know the quantity of the products enter and leave your inventory in
          real time
        </div>
        <div className="bg-base-100 text-center text-xl rounded lg:w-1/3 gap-2  text-secondary dark:text-gray-300 hover:bg-base-200 flex justify-center flex-col items-center w-full p-6 ">
          <Image
            className="m-auto pt-2 "
            src={Grafico}
            alt="logo"
            width={150}
            height={150}
          />
          Know the report about the products and more that you invetory contain
        </div>
        <div className="bg-base-100 text-center text-xl rounded lg:w-1/3 gap-2  text-secondary dark:text-gray-300 hover:bg-base-200 flex justify-center flex-col items-center w-full p-6 ">
          <Image
            className="m-auto pt-2 "
            src={User}
            alt="logo"
            width={150}
            height={150}
          />
          Take the control about the access of your employes in the inventory
        </div>
      </section>
    </>
  );
}
