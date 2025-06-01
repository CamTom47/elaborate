import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ title, description, url }) => {
	return (
		<div className='group relative h-60 w-90 flex flex-col justify-center items-center py-4 rounded-2xl bg-stone-50 hover:bg-stone-900 hover:border-stone-50 hover:border hover:text-stone-50  duration-200'>
			<h1 className='text-2xl opacity-100 group-hover:opacity-0 duration-200'>Card Title</h1>
			<p className='absolute top-10 left-10 opacity-0 group-hover:opacity-100 duration-200'>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui earum esse enim rem.
			</p>
			<Link
				className='absolute bottom-10 left-10 opacity-0 group-hover:opacity-100 border rounded-md p-1 duration-200'
				to='/services'>
				Read More
			</Link>
		</div>
	);
};

export default ServiceCard;
