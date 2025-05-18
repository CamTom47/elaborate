import React from "react";
import { faker } from "@faker-js/faker";
import HomepageSection from "./HomepageSection";


const Homepage = () => {
	const aboutContent = {
		title: "About Us",
		description:
			faker.lorem.paragraphs(3, '\n'),
		linkText: "Learn More",
		color: "light",
		route: "/about"
	};
	const serviceContent = {
		title: "Services",
		description:
			faker.lorem.paragraphs(3, '\n'),
		linkText: "See More Details",
		color: "dark",
		route: "/services"

	};
	const portfolioContent = {
		title: "Portfolio",
		description:
			faker.lorem.paragraphs(3, '\n'),
		linkText: "See Projects",
		color: "light",
		route: "/portfolio"

	};
	return (
		<div className='flex flex-col justify-center items-center'>
			<h3 className="text-center justify-center text-stone-800 text-4xl w-full py-30 opacity-90">We create <span className="text-stone-400">Beautiful</span> and <span className="text-stone-400">Intuitive</span> Applications</h3>
			<HomepageSection content={aboutContent}></HomepageSection>
			<HomepageSection content={serviceContent}></HomepageSection>
			<HomepageSection content={portfolioContent}></HomepageSection>
			<div className="h-20 fixed bottom-0 rotate-180 w-full homepage-div"></div>
		</div>
	);
};

export default Homepage;
