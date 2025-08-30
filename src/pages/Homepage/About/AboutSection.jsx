import { Link } from "react-router";
import ButtonLink from "../../../components/ButtonLink";

const AboutSection = () => {
	return (
		<div className='flex justify-start h-fit px-80 pb-10 bg-blue-500 '>
			<div className='flex flex-col gap-y-10 border-b-2 border-blue-200 pb-20'>
				<h1 className='w-full text-6xl leading-20 font-bold text-white'>
					Give Shape And Meaning To Your Business Ideas With
				</h1>
				<span className='text-4xl font-bold text-blue-900'> Custom Software Development Solutions</span>
				<p className='text-3xl font-normal text-white text-wrap w-1/2'>Achieve your goals with efficiency and inntuitive Software Solutions</p>
				<div className='w-7/8 flex flex-col items-left text-left text-stone-900'>
					<p className='text-2xl font-medium text-black text-wrap'></p>
					<ButtonLink label='Learn More' url='/about' />
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
