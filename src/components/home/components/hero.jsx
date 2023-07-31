import Image from "next/image";
import Link from "next/link";
import Logo from "../../../../public/images/logos/logo_hero.webp";
export default function Hero() {
  return (
    <>
      <section className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={Logo}
            width={300}
            height={300}
            className="max-w-sm  md:w-[500px] md:h-[500px] "
            alt="logo"
          />
          <div>
            <h1 className="text-3xl pt-6 md:pt-0 md:text-5xl font-bold dark:text-gray-300">
              Zurmc System Inventory
            </h1>
            <p className="py-6 dark:text-gray-200">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link
              href={"/auth/login"}
              className="btn bg-primary text-white opacity-95 hover:opacity-100 hover:bg-primary"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
