import React from 'react'
import Image from 'next/image'
import picture from '../../public/oig.jpg'
import picture2 from '../../public/rm.jpg'
import picture3 from '../../public/av.jpg'
import Link from 'next/link'
import {
  RiLinkedinFill,
  RiGithubFill
} from 'react-icons/ri';

export default function Team() {
  return (
    <div>
      <h1 className=' font-medium text-center mt-10 text-2xl' ><span className='text-2xl text-purple-500'>Our</span>Team</h1>
      <h2 className='text-center text-2xl mt-4  font-medium '>Team Lead</h2>
      <div className='flex ml-8 p-4 md:flex'>
        <div className=' shadow-2xl bg-slate-300 flex mt-4 gap-4 '>
          <div className='w-1/2 '>
            <Image src={picture}
              width={250}
            />

          </div>
          <div className='w-1/4 flex-col'>
            <p className='text-purple-500'>Nombre y Apellido</p>
            <h4 className='font-medium'>Nacionalidad: <span>Colombia</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni velit recusandae consequuntur harum quam magnam, id modi, nulla suscipit esse ea molestias eius excepturi dolorum minus vitae ducimus voluptas voluptatibus!</p>
            <h4 className='font-medium'>Redes sociale</h4>
            <div className='inline-flex gap-2'>
              <Link href="#"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="#"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </div>
      </div>

      <h2 className='text-center text-2xl mt-8  font-medium '>Backend Team</h2>
      <div className='flex-col ml-8 gap-2 p-4 md:flex-col sm:flex-col xl:flex-row ' >
        <div className=' shadow-2xl bg-slate-300 flex mt-4  w-1/3   gap-4'>
          <div className='w-1/2 '>
            <Image src={picture}
              width={250}
            />
          </div>
          <div className='w-1/2 flex-col'>
            <p className='text-purple-500'>Fabrizio Ferroni </p>
            <h4 className='font-medium'>Nacionalidad: <span>Argentina</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni velit recusandae consequuntur harum quam magnam, id modi, nulla suscipit esse ea molestias eius excepturi dolorum minus vitae ducimus voluptas voluptatibus!</p>
            <h4 className='font-medium'>Redes sociale</h4>
            <div className='inline-flex gap-2'>
              <Link href="#"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="#"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </div>

        <div className=' shadow-2xl bg-slate-300 flex mt-4  w-1/3   gap-2'>
          <div className='w-1/2 '>
            <Image src={picture}
              width={250}
            />
          </div>
          <div className='w-1/4 flex-col'>
            <p className='text-purple-500'>Julio Romanz </p>
            <h4 className='font-medium'>Nacionalidad: <span>Perú</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni velit recusandae consequuntur harum quam magnam, id modi, nulla suscipit esse ea molestias eius excepturi dolorum minus vitae ducimus voluptas voluptatibus!</p>
            <h4 className='font-medium'>Redes sociale</h4>
            <div className='inline-flex gap-2'>
              <Link href="#"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="#"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </div>

        <div className=' shadow-2xl bg-slate-300 flex mt-4  w-1/3   gap-2'>
          <div className='w-1/2 '>
            <Image src={picture}
              width={250}
            />
          </div>
          <div className='w-1/4 flex-col'>
            <p className='text-purple-500'>Kevin JH </p>
            <h4 className='font-medium'>Nacionalidad: <span>Colombia</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni velit recusandae consequuntur harum quam magnam, id modi, nulla suscipit esse ea molestias eius excepturi dolorum minus vitae ducimus voluptas voluptatibus!</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="#"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="#"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </div>
      </div>
      <h2 className='text-center text-2xl mt-8 font-medium '>Frontend Team</h2>
      <div className='flex-col ml-8 gap-2 p-4 md:flex-col xl:flex-row' >
        <div className=' shadow-2xl bg-slate-300 flex mt-4  w-1/2   gap-2'>
          <div >
            <Image src={picture3}
              width={250}
           
            />
          </div>
          <div className='w-1/4 flex-col'>
            <p className='text-purple-500'>Andres Valencia </p>
            <h4 className='font-medium'>Nacionalidad: <span>Ecuador</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Magni velit recusandae consequuntur harum quam magnam, id modi, nulla suscipit esse ea molestias eius excepturi dolorum minus vitae ducimus voluptas voluptatibus!</p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="#"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="#"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </div>

        <div className=' shadow-2xl bg-slate-300 flex mt-4  w-1/2 gap-2'>
          <div>
            <Image src={picture2}
              width={350}
            />
          </div>
          <div className='w-1/4 flex-col'>
            <p className='text-purple-500'>Ricardo Mejía </p>
            <h4 className='font-medium'>Nacionalidad: <span>Colombia</span></h4>
            <h4 className='font-medium'>Perfil</h4>
            <p className=''>Desarrollador de software apasionado con 2 años de experiencia freelance y 3 años de experiencia como instructor de análisis y desarrollo de software. Tengo conocimientos en React.js, Vue.js, Node.js, Java, C# y ASP.NET. Mi enfoque se centra en crear soluciones eficientes y escalables para satisfacer las necesidades de los clientes. Me destaco en el diseño, desarrollo e implementación de aplicaciones web de alta calidad. </p>
            <h4 className='font-medium'>Redes sociales</h4>
            <div className='inline-flex gap-2'>
              <Link href="https://www.linkedin.com/in/ricardo-andres-mejia-cordoba/"><RiLinkedinFill className='text-purple-500 text-2xl' /></Link>
              <Link href="https://github.com/ramtako8922"><RiGithubFill className='text-purple-500 text-2xl' /></Link>
            </div>
          </div>
        </div>

      </div>
    </div>







  )
}


