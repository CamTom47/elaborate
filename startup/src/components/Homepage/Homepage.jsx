import React, { useEffect } from "react";
import { Link } from "react-router";
import { faker } from "@faker-js/faker";
import AboutSection from "../AboutSection/AboutSection";
import ServiceSection from "../Services/ServiceSection";

const Homepage = () => {
	const portfolioContent = {
		title: "Portfolio",
		description: faker.lorem.paragraphs(3, "\n"),
		linkText: "See Projects",
		color: "light",
		route: "/portfolio",
	};
	return (
		<div className='scroll-smooth overflow-x-hidden '>
			<img
				className='absolute bg-auto -z-10'
				src='src/assets/photos/charles-forerunner-3fPXt37X6UQ-unsplash.jpg'
				alt='Black and white photo of people look over a city skyline.'
			/>
			{/* About Section */}
			<AboutSection></AboutSection>
			{/* Services Section */}
			<ServiceSection></ServiceSection>

			{/* Portfolio Section */}
			{/* <div className='flex flex-col items-center px-50 py-30 z-10'>
				<h1 className='text-5xl mb-10 text-stone-800'>{portfolioContent.title}</h1>
				<div className='flex flex-col w-1/2 items-center text-left text-stone-800'>
					<p className='text-xl mb-10'>{portfolioContent.description}</p>
					<Link
						to={portfolioContent.route}
						className='bg-stone-100 text-stone-800 py-2 px-3 rounded-md hover:bg-stone-810000 hover:text-stone-50 outline hover:outline-0 duration-200'>
						{portfolioContent.linkText}
					</Link>
				</div>
			</div>
			<div className='h-20 fixed bottom-0 rotate-180 w-full homepage-div'></div> */}
		</div>
	);
};

export default Homepage;
