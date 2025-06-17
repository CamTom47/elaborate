import { Link } from "react-router";

const AboutSection = () => {
	return (
		<div className='flex items-center h-screen px-20 pb-10 bg-linear-to-r from-white to-sky-200 gap-x-10'>
			<div className='flex flex-col gap-y-10 w-5/8'>
				<h1 className='w-full text-6xl leading-20'>
					Give Shape And Meaning To Your Business Ideas With
					<span className="text-wrap font-black text-black"> Custom Software Development Solutions</span>
				</h1>
				<p className="text-3xl font-normal">Achieve your goals with efficiency and inntuitive Software Solutions</p>
				<div className='w-7/8 flex flex-col items-left text-left text-stone-900'>
					<p className='text-2xl font-medium text-black text-wrap'></p>
					<Link
						to='/about'
						className='w-fit bg-sky-400 text-white text-xl py-2 px-3 rounded-sm hover:bg-sky-500 hover:outline-none duration-200'>
						Learn More
					</Link>
				</div>
			</div>
			<div className="bg-stone-200 w-3/8 h-full">test </div>
		</div>
	);
};

export default AboutSection;
