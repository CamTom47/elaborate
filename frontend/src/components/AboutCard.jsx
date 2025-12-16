import React, { Children } from "react";

const AboutCard = ({ title, text, icon }) => {
	return (
		<div className='flex flex-col justify-between items-center h-90 w-72 bg-white py-9 px-6 rounded-xl md:w-full md:h-fit md:relative md:gap-y-4 xl:h-90 xl:w-full' style={{boxShadow: '0 0 10px 0 gray'}}>
			<h3 className='text-primary-dark text-xl font-bold'>{title}</h3>
			<div className='bg-primary border border-primary-dark *:size-10 rounded-full p-2 md:absolute md:-right-4 md:-top-4 xl:relative xl:right-0 xl:top-0'>{icon}</div>
			<p className='text-center text-md'>{text}</p>
		</div>
	);
};

export default AboutCard;
