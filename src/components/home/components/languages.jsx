import Image from "next/image";
import NextJS from "../../../../public/images/icons/nextjs-2.svg";
import NodeJS from "../../../../public/images/icons/nodejs-1.svg";
import PostgreSql from "../../../../public/images/icons/postgresql.svg";

export default function DevLang() {
  return (
    <>
      <section className="bg-base-200 p-6">
        <h3 className=" mt-10 text-center text-gray-500 dark:text-gray-300 font-bold text-xl md:text-3xl  uppercase">
          Language with which the application was made
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 mb-4">
          <div className="flex flex-col justify-center items-center text-gray-400 dark:text-gray-300 ">
            <div
              className="grid w-34 h-26 rounded bg-secondary text-white place-content-center place-items-center p-6"
              title="NextJS Framework con cual se desarrollo el frontend"
            >
              <Image
                className="md:w-[100px] md:h-[100px]"
                src={NextJS}
                alt="logo"
                width={85}
                height={85}
              />
              Next JS
            </div>
            <span className="uppercase font-bold ">Frontend</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gray-400 dark:text-gray-300">
            <div
              className="grid w-34 h-26 rounded bg-primary text-white place-content-center place-items-center p-6"
              title="NodeJs y Express Framework con cual se desarrollo el backend"
            >
              <Image
                className=" md:w-[100px] md:h-[100px] "
                src={NodeJS}
                alt="logo"
                width={85}
                height={85}
              />
              Node JS
            </div>
            <span className="uppercase font-bold">Backend</span>
          </div>
          <div className="flex flex-col justify-center items-center text-gray-400 dark:text-gray-300">
            <div
              className="grid w-34 h-26 rounded bg-accent text-white place-content-center place-items-center p-6"
              title="Database PostgreSQL"
            >
              <Image
                className=" md:w-[100px] md:h-[100px]"
                src={PostgreSql}
                alt="logo"
                width={85}
                height={85}
              />
              PostgreSQL
            </div>
            <span className="uppercase font-bold">Database</span>
          </div>
        </div>
      </section>
    </>
  );
}
