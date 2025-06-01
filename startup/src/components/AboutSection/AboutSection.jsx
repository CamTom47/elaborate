import React from "react";
import { Link } from "react-router";
import { faker } from "@faker-js/faker";

const AboutSection = () => {
	return (
		<div className='flex flex-col justify-center px-20 h-screen snap-always snap-start'>
			<div className='bg-stone-800 rounded-md w-1/2 p-8'>
				<h1 className='w-full text-5xl text-wrap font-black mb-10 text-lime-600'>Custom Software Development</h1>
				<div className='w-7/8 flex flex-col items-left text-left text-stone-900'>
					<p className='text-2xl text-stone-100 text-wrap mb-10'>We specialize in creating custom software solutions that are designed to meet your specific needs.</p>
					<Link
						to='/about'
						className='w-fit bg-lime-600 text-stone-100 py-2 px-3 rounded-sm hover:bg-lime-300 hover:text-lime-600 hover:outline duration-200'>
						Learn More
					</Link>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
