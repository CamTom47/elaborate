import React from "react";
import { Link } from "react-router";
import { faker } from "@faker-js/faker";

const AboutSection = () => {
	return (
		<div className='h-screen p-20'>
			<div className=' rounded-md w-3/4 p-8'>
				<h1 className='w-full text-8xl text-wrap font-semibold mb-10 text-sky-500'>Custom Software Development</h1>
				<div className='w-7/8 flex flex-col items-left text-left text-stone-900'>
					<p className='text-4xl font-medium text-stone-100 text-wrap mb-10'>
						We specialize in creating custom software solutions that are designed to meet your specific needs.
					</p>
					<Link
						to='/about'
						className='w-fit text-sky-400 outline-sky-400 outline text-lg py-2 px-3 rounded-sm hover:bg-sky-600 hover:text-stone-950 hover:outline-none duration-200'>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
