import React from "react";
import { Link } from "react-router";
const Homepage = () => {
	return (
		<div className='flex flex-col px-20 mx-10 my-30 gap-y-80'>
			{/* About Section */}
			<div className='flex justify-between items-top'>
				<div className='bg-stone-200 h-150 w-5/8 rounded-3xl'></div>
				<div className='flex flex-col items-end'>
					<p className='text-white text-4xl mb-5'>Content</p>
					<Link to='/about' className='bg-stone-200 text-center rounded-full p-2 hover:bg-stone-900 hover:text-stone-200 hover:border-2 hover:border-stone-200 duration-200'>
						Learn More
					</Link>
				</div>
			</div>
			{/* Services Section */}
			<div className='flex justify-between items-top'>
				<div className='flex flex-col items-start'>
					<p className='text-white text-4xl mb-5'>Content</p>
					<Link to='/services' className='bg-stone-200 text-center rounded-full p-2 hover:bg-stone-900 hover:text-stone-200 hover:border-2 hover:border-stone-200 duration-200'>
						See All Services
					</Link>
				</div>
				<div className='bg-stone-200 h-150 w-5/8 rounded-3xl'></div>
			</div>
			{/* Case Study Section */}
			<div className='flex justify-between items-top'>
				<div className='bg-stone-200 h-150 w-5/8 rounded-3xl'></div>
				<div className='flex flex-col items-end'>
					<p className='text-white text-4xl mb-5'>Content</p>
					<Link to='/portfolio' className='bg-stone-200 text-center rounded-full p-2 hover:bg-stone-900 hover:text-stone-200 hover:border-2 hover:border-stone-200 duration-200'>
						Case Studies
					</Link>
				</div>
			</div>
			{/* Contact Section */}
			<div className='flex justify-between items-top'>
				<div className='flex flex-col items-start'>
					<p className='text-white text-4xl mb-5'>Content</p>
					<Link to='/services' className='bg-stone-200 text-center rounded-full p-2 hover:bg-stone-900 hover:text-stone-200 hover:border-2 hover:border-stone-200 duration-200'>
						Contact Us
					</Link>
				</div>
				<div className='bg-stone-200 h-150 w-5/8 rounded-3xl'></div>
			</div>
		</div>
	);
};

export default Homepage;
