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
		<div className='scroll-smooth'>
			<img
				className='fixed bg-auto -z-10'
				src='src/assets/photos/milad-fakurian-_S-zZyQiOr8-unsplash.jpg'
				alt='Black and white photo of people look over a city skyline.'
			/>
			{/* About Section */}
			<AboutSection></AboutSection>
			{/* Services Section */}
			<ServiceSection></ServiceSection>

			{/* Portfolio Section */}
			
			<div className='h-20 fixed bottom-0 rotate-180 w-full homepage-div'></div>
		</div>
	);
};

export default Homepage;
