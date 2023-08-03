import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../../../public/images/logos/logo_hero.webp';
export default function Hero() {
	return (
		<>
			<section className='w-full flex flex-col justify-center items-center bg-state'>
				<div className=' w-full flex justify-center p-8'>
					<div className='lg:w-[40rem]'>
						<h1 className='text-3xl pt-6 md:pt-0 md:text-5xl font-bold dark:text-gray-300'>
							Zurmc System Inventory
						</h1>
						<p className='py-6 dark:text-gray-200'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Voluptatibus sapiente aliquam cum sed repellat velit,
							accusantium dignissimos consequatur. Excepturi incidunt corporis
							delectus obcaecati minus esse ab aperiam eaque iure sint? Lorem,
							ipsum dolor sit amet consectetur adipisicing elit. Praesentium
							asperiores ex vero illum, maiores rerum alias repellendus.
							Tempora, corporis error? Iure eum nisi accusamus dolorum nostrum
							distinctio temporibus beatae debitis?
						</p>
						<Link
							href={'/auth/login'}
							className='btn bg-primary text-white opacity-95 hover:opacity-100 hover:bg-primary'>
							Get Started
						</Link>
					</div>
					<Image
						src={Logo}
						width={300}
						height={300}
						className='max-w-sm  md:w-auto md:h-auto '
						alt='logo'
					/>
				</div>
				<div className=' w-full flex justify-center p-8'>
					<Image
						src={Logo}
						width={300}
						height={300}
						className='max-w-sm  md:w-auto md:h-auto '
						alt='logo'
					/>
					<div className='lg:w-[40rem]'>
						<h1 className='text-3xl pt-6 md:pt-0 md:text-5xl font-bold dark:text-gray-300'>
							panel
						</h1>
						<p className='py-6 dark:text-gray-200'>
							Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
							excepturi exercitationem quasi. In deleniti eaque aut repudiandae
							et a id nisi. Lorem ipsum dolor, sit amet consectetur adipisicing
							elit. Voluptatibus sapiente aliquam cum sed repellat velit,
							accusantium dignissimos consequatur. Excepturi incidunt corporis
							delectus obcaecati minus esse ab aperiam eaque iure sint? Lorem,
							ipsum dolor sit amet consectetur adipisicing elit. Praesentium
							asperiores ex vero illum, maiores rerum alias repellendus.
							Tempora, corporis error? Iure eum nisi accusamus dolorum nostrum
							distinctio temporibus beatae debitis?
						</p>
						<Link
							href={'/auth/login'}
							className='btn bg-primary text-white opacity-95 hover:opacity-100 hover:bg-primary'>
							Get Started
						</Link>
					</div>
				</div>
			</section>
		</>
	);
}
