import React from "react";

const ServiceScroller = ({ handleSelection }) => {
	const handleClick = (e) => {
		handleSelection();
		scrollToSection(e)
	}
	const scrollToSection = (e) => {
		const element = document.getElementById(e.target.id);
		document.getElementById(e.target.value).scrollIntoView({behavior: "smooth"})
	}
	return (
		<div className='flex w-1/2 pt-30'>
			<ul className='h-80 flex flex-col fixed gap-y-4 items-end [&_button]:text-stone-400 [&_button]:text-lg [&_button]:hover:text-stone-600 [&_button]:focus:text-stone-800 [&_button]:focus:border-r-stone-900 [&_button]:focus:border-r [&_button]:pe-2 [&_button]:duration-500'>
				<button value='website-development' onClick={handleClick}>Website Development</button>
				<button value='website-design' onClick={handleClick}>Website Designing</button>
				<button value='website-redesigning' onClick={handleClick}>Website Redesigning</button>
				<button value='cms-website-development' onClick={handleClick}>CMS Website Development</button>
				<button value='web-app-dev' onClick={handleClick}>Web Application Development</button>
				<button value='maintenance'>Ongoing Maintenance</button>
				<button value='hosting' onClick={handleClick}>Site Hosting</button>
				<button value='seo' onClick={handleClick}>SEO?</button>
			</ul>
		</div>
	);
};

export default ServiceScroller;
