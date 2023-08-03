import Hero from './components/hero';
import CanYou from './components/can-you';
import DevLang from './components/languages';
export default function Home(options) {
	return (
		<div className='w-full h-auto'>
			<Hero />
			{/* <CanYou />
			<DevLang /> */}
		</div>
	);
}
