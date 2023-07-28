import React, { useState } from 'react';
import Link from 'next/link';

// Icons

// =============================Icons=====================================

import {
	RiBarChart2Line,
	RiCustomerService2Line,
	RiCalendarTodoLine,
	RiLogoutCircleRLine,
	RiArrowRightSLine,
	RiMenu3Line,
	RiCloseLine,
} from 'react-icons/ri';
import { SiPcgamingwiki } from 'react-icons/si';

const Sidebar = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [showSubmenu, setShowSubmenu] = useState(false);
	return (
		<>
			<div

				className={` overflow-y-hidden fixed lg:static  xl:w-auto min-h-screen top-0 bg-secondary-100 p-4 flex flex-col justify-between z-50 ${
					showMenu ? 'left-0' : '-left-full'
				} transition-all`}>
				<div>
					<h1 className='text-center text-2xl font-bold text-black mb-10'>
						Admin<span className='text-primary text-5xl'>.</span>
					</h1>
					<ul>
						<li>
							<Link
								href='/dashboard/products'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
								<RiBarChart2Line className='text-primary' />
								Products

	
					<ul>
						<li>
							<Link
								href='/dashboard/home'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-primary hover:shadow-lg hover:text-black transform active:scale-x-75 transition-transform '>
								<RiBarChart2Line className='text-white' />
								Dashboard

							</Link>
						</li>
						<li>
							<button
								onClick={() => setShowSubmenu(!showSubmenu)}

								className='w-full flex items-center justify-between py-2 px-4 rounded-lg hover:bg-slate-400 transition-colors'>
								<span className='flex items-center gap-4'>
									<SiPcgamingwiki className='text-primary' />
									Categories

								</span>
								<RiArrowRightSLine
									className={`mt-1 ${
										showSubmenu && 'rotate-90'
									} transition-all`}
								/>
							</button>
							<ul
								className={` ${
									showSubmenu ? 'h-[130px]' : 'h-0'
								} overflow-y-hidden transition-all`}>
								<li>
									<Link
										href='/dashboard/home'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-primary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>
										Gaming

									</Link>
								</li>
								<li>
									<Link
										href='/dashboard/home'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>
										Office

									</Link>
								</li>
								<li>
									<Link
								href='/dashboard/home'
										className='py-2 px-4 border-l border-gray-500 ml-6 block relative before:w-3 before:h-3 before:absolute before:bg-gray-500 before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 before:border-4 before:border-secondary-100 hover:text-white transition-colors'>
										Photography

									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link
							href='/dashboard/home'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
								<RiCustomerService2Line className='text-primary' /> Tickets

							</Link>
						</li>
						<li>
							<Link

								href='/dashboard/home'
								className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
								<RiCalendarTodoLine className='text-primary' /> Calendar

							</Link>
						</li>
					</ul>
				</div>
				<nav>
					{/* <Link
						href='/'
						className='flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors'>
						<RiLogoutCircleRLine className='text-white' /> Log out
					</Link> */}
				</nav>
			</div>
			<button
				onClick={() => setShowMenu(!showMenu)}
				className='xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50'>
				{showMenu ? <RiCloseLine /> : <RiMenu3Line />}
			</button>
		</>
	);
};

export default Sidebar;
