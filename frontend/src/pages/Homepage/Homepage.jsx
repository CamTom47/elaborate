import AboutSection from "./About/AboutSection";
import ServiceSection from "./Services/ServiceSection";
import Footer from "../../components/Footer";

import "./Homepage.scss";

const Homepage = () => {
	return (
		<div className='homepage-container h-fit w-screen bg-background-primary'>
				<AboutSection></AboutSection>
				<ServiceSection></ServiceSection>
				<Footer></Footer>
		</div>
	);
};

export default Homepage;
