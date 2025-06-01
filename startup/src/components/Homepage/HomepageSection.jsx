import React from "react";
import { Link } from "react-router";

const HomepageSection = ({ content }) => {
	if (content.color === "light") {
		return (
			<div className='flex flex-col items-center px-50 py-30'>
				<h1 className='text-5xl mb-10 text-stone-800'>{content.title}</h1>
				<div className='flex flex-col w-1/2 items-center text-left text-stone-800'>
					<p className='text-xl mb-10'>{content.description}</p>
					<Link
						to={content.route}
						className='bg-stone-100 text-stone-800 py-2 px-3 rounded-full hover:bg-stone-810000 hover:text-stone-50 outline hover:outline-0 duration-200'>
						{content.linkText}
					</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className='flex flex-col items-center px-50 py-30'>
				<h1 className='text-5xl mb-10'>{content.title}</h1>
				<div className='w-1/2 flex flex-col items-center text-left'>
					<p className='mb-10'>{content.description}</p>
					<Link
						to={content.route}
						className='bg-stone-400 py-2 px-3 rounded-full text-stone-100 hover:bg-stone-100 hover:text-stone-400 outline hover:outline-0 duration-200'>
						{content.linkText}
					</Link>
				</div>
			</div>
		);
	}
};

export default HomepageSection;
