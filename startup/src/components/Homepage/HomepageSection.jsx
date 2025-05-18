import React from "react";
import { Link } from "react-router";

const HomepageSection = ({ content }) => {
	if (content.color === "light") {
		return (
			<div className='flex flex-col items-left px-50 py-30 opacity-80'>
				<h1 className='text-3xl mb-6 text-stone-800'>{content.title}</h1>
				<div className='w-3/4 flex flex-col items-start text-left text-stone-800'>
					<p className='mb-10'>{content.description}</p>
					<Link
						to={content.route}
						className='bg-stone-100 text-stone-800 py-2 px-3 rounded-full hover:bg-stone-800 hover:text-stone-50 outline hover:outline-0 duration-200'>
						{content.linkText}
					</Link>
				</div>
			</div>
		);
	} else {
		return (
			<div className='flex flex-col items-end bg-stone-400 px-50 py-30 opacity-70'>
				<h1 className='text-3xl mb-6 text-stone-100'>{content.title}</h1>
				<div className='w-3/4 flex flex-col items-end text-right text-stone-100'>
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
