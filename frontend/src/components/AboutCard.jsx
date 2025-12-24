import React, { Children } from "react";

const AboutCard = ({ title, text, icon }) => {
	return (
		<div
			className='flex flex-col justify-between items-center h-90 w-80 text-center py-9 px-6 border-t border-base md:w-full xl:h-90 xl:w-full'>
			<h3 className='text-primary text-3xl font-bold'>{title}</h3>
			<div className='border border-base text-base *:size-10 rounded-full p-2 md:-right-4 md:-top-4 xl:relative xl:right-0 xl:top-0'>
				{icon}
			</div>
			<p className='text-center text-lg'>{text}</p>
		</div>
	);
};

export default AboutCard;
