import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	RiHome2Line,
	RiTeamLine,
	RiLoginCircleLine,
	RiUserAddLine,
	RiMenuLine,
	RiMore2Line,
	RiCloseLine,
} from 'react-icons/ri';
import Logo from '../../../public/logo-2.svg';
import { useRouter } from 'next/router';
export default function Nav({ cls }) {
	const router = useRouter();
	//   console.log(router);
	const [navbar, setNavbar] = useState(false);
	return (
		<>
			{/* fixed top-0 left-0 right-0 z-10  */}
			<nav className={`w-full bg-yellow-300  ${cls}`}>
				<div className='justify-between px-4 mx-auto md:items-center md:flex md:px-4'>
					<div>
						<div className='flex items-center justify-between py-3 md:py-5 md:block translate-x-20 text-gray-800 dark:hover:text-white'>
							{/* LOGO */}
							<Link
								href='/'
								className='text-3xl font-extrabold uppercase '>
								ZurmC
							</Link>
							{/* HAMBURGER BUTTON FOR MOBILE */}
							<div className='md:hidden'>
								<button
									className='p-2 text-gray-700 rounded-md outline-none '
									onClick={() => setNavbar(!navbar)}>
									{navbar ? (
										<RiCloseLine className='w-[30px] h-[30px] text-white' />
									) : (
										<RiMenuLine className='w-[30px] h-[30px] text-white ' />
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
								navbar ? 'p-12 md:p-0 block' : 'hidden'
							}`}>
							<ul className='h-screen md:h-auto items-center justify-center md:flex   text-white    gap-4 xl:text-xl w-auto'>
								<li className=' text-xl text-white text-center my-4 md:my-0'>
									<Link
										href={'/'}
										onClick={() => setNavbar(!navbar)}
										className={`${
											router.pathname == '/'
												? 'bg-blue-300 rounded text-blue-400'
												: ''
										}   flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded hover:text-blue-900`}>
										<RiHome2Line className='mr-2' />
										Home
									</Link>
								</li>
								<li className='text-xl text-white  text-center my-4 md:my-0'>
									<Link
										href={'/team'}
										onClick={() => setNavbar(!navbar)}
										className={`${
											router.pathname == '/team'
												? 'bg-blue-300 rounded text-blue-900'
												: ''
										}   flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded hover:text-blue-900`}>
										<RiTeamLine className=' mr-2 ' />
										Team
									</Link>
								</li>
								<li className=' text-xl text-white text-center my-4 md:my-0'>
									<Link
										href={'/auth/login'}
										onClick={() => setNavbar(!navbar)}
										className={`${
											router.pathname == '/auth/login'
												? 'bg-blue-300 rounded text-blue-900'
												: ''
										}   flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded hover:text-blue-900`}>
										<RiLoginCircleLine className='mr-2 ' />
										Login
									</Link>
								</li>
								<li className=' text-xl text-white  text-center'>
									<Link
										href={'/auth/register'}
										onClick={() => setNavbar(!navbar)}
										className={`${
											router.pathname == '/auth/register'
												? 'bg-blue-300 rounded text-blue-900'
												: ''
										}   flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded hover:text-blue-900`}>
										<RiUserAddLine className='mr-2 ' />
										Register
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</>
	);

	//   return (
	//     <>
	//       <nav className="bg-blue-500 flex justify-between items-center w-auto p-4">
	//         <div>
	//           <Link href={"/"}>
	//             <Image src={Logo} alt="logo" width={50} height={50}></Image>
	//           </Link>
	//         </div>

	//         <div className=" text-white  flex items-center gap-4 xl:text-xl w-auto">
	//           <Link
	//             href={"/"}
	//             className={`${
	//               router.pathname == "/" ? "bg-blue-300 rounded" : ""
	//             }   flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded`}
	//           >
	//             <RiHome2Line className="mr-2" />
	//             Home
	//           </Link>
	//           <Link
	//             href={"/team"}
	//             className={`${
	//               router.pathname == "/team" ? "bg-blue-300 rounded" : ""
	//             }   flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded`}
	//           >
	//             <RiTeamLine className=" mr-2 " />
	//             Team
	//           </Link>
	//           <Link
	//             href={"/auth/login"}
	//             className="flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded"
	//           >
	//             <RiLoginCircleLine className="mr-2 " />
	//             Login
	//           </Link>
	//           <Link
	//             href={"/aboutus/Team"}
	//             className="flex justify-center items-center hover:bg-blue-300 p-2 hover:rounded"
	//           >
	//             <RiUserAddLine className="mr-2 " />
	//             Register
	//           </Link>
	//         </div>
	//       </nav>
	//     </>
	//   );
}
