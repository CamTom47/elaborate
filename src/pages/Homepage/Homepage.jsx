import { faker } from "@faker-js/faker";
import AboutSection from "./About/AboutSection";
import ServiceSection from "./Services/ServiceSection";

const Homepage = () => {
	
	return (
		<div className='main-app scroll-smooth py-20'>
			<AboutSection></AboutSection>
			<ServiceSection></ServiceSection>
			
		</div>
	);
};

export default Homepage;
