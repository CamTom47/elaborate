import React, { useEffect } from "react";
import { Link } from "react-router";
import { faker } from "@faker-js/faker";
import AboutSection from "./About/AboutSection";
import ServiceSection from "./Services/ServiceSection";

const Homepage = () => {
	const portfolioContent = {
		title: "Portfolio",
		description: faker.lorem.paragraphs(3, "\n"),
		linkText: "See Projects",
		color: "light",
		route: "/portfolio",
	};
	return (
		<div className='scroll-smooth bg-blue-500 py-20'>
			<AboutSection></AboutSection>
			<ServiceSection></ServiceSection>
			
		</div>
	);
};

export default Homepage;
