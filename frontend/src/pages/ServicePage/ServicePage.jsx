import { useState, useEffect } from "react";
import DropdownNav from "../../components/DropdownNav";
import ServicePageCardPrimary from "../../components/ServicePageCardPrimary";
import ButtonLink from "../../components/ButtonLink";
import Footer from "../../components/Footer";

import "./ServicePage.scss";

const Services = () => {
	// const services = {
	// 	"Website Development": "Website Development Content",
	// 	"Website Designing": "Website Designing Content",
	// 	"Website Redesigning": "Website Redesigning Content",
	// 	"CMS Website Development": "CMS Website Development Content",
	// 	"Web Application Development": "Web Application Development Content",
	// 	"Ongoing Maintenance": "Ongoing Maintenance Content",
	// 	"Site Hosting": "Site Hosting Content",
	// 	"SEO?": "SEO Content",
	// };

	const services = {
		"Web Design": ["E-Commerce", "Personal Website", "Porfolio", "Small Business", "Blog"],
		"Web Development": ["APIs", "Applications"],
		"Mobile Development": ["Applications"],
		"Web/App Redesign": ["Web Redesign", "Application Redesign"],
	};
	const [activeSection, setActiveSection] = useState("Website Development");
	const [sectionContent, setSectionContent] = useState(null);
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = (e) => {
		e.preventDefault();
		const { scrollHeight, scrollTop, clientHeight } = e.target;
		const position = Math.ceil((scrollTop / (scrollHeight - clientHeight)) * 100);
		setScrollPosition(position);
	};

	return (
		<div
			className={`service-page-container flex flex-col h-fit w-full items-center bg-background-primary xl:gap-y-40 2xl:px-60`}>
			<div className='flex flex-col gap-y-12 px-4 py-20  md:mx-12 lg:px-40 xl:mx-40 w-fit'>
				<div tabIndex='4' id='website-design' className='flex flex-col gap-y-4'>
					<h2 className='text-wrap text-3xl text-primary font-black text-center'>Web Design</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						A well designed website a person's first interaction with your company and should reflect what you bring to
						the table.
					</p>
				</div>
				<div className='flex flex-col gap-y-24 items-center md:grid md:grid-cols-2  lg:gap-x-12 lg:gap-y-16'>
					<ServicePageCardPrimary
						title='E-Commerce'
						content='Attract clients with an intuitive E-commerce site that makes it easy for your customer to use and simple for you to manage.'
					/>
					<ServicePageCardPrimary
						title='Personal Website'
						content='Introduce yourself to the world with a site that embodies your personality.'
					/>
					<ServicePageCardPrimary
						title='Portfolio'
						content='Showcase your experience with a porfolio site that compliments your style and work.'
					/>
					<ServicePageCardPrimary
						title='Small Business'
						content='Connect with your customer base on a new level by communicating your value through a concise and clear business site.'
					/>
					<ServicePageCardPrimary
						title='Blog'
						content='Share content with people in a manner that works for you through a user friendly and efficient blog.'
					/>
				</div>
			</div>
			<div className='flex flex-col gap-y-12 px-4 py-20 bg-background-secondary md:px-12 lg:px-40 xl:mx-40'>
				<div tabIndex='4' id='web-app-development' className='flex flex-col gap-y-4'>
					<h2 className='text-center text-secondary font-bold text-3xl'>Web Development</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
				</div>
				<div className='flex flex-col gap-y-24 items-center md:grid md:grid-cols-2 lg:gap-x-12 lg:gap-y-16'>
					<ServicePageCardPrimary
						title='APIs'
						content='Create APIs to meet your needs or seemlessly integrate external APIs into your existing systems.'
						secondary={true}
					/>
					<ServicePageCardPrimary
						title='Custom Software'
						content='Develop custom software solutions that are tailor to your specifications.'
						secondary={true}
					/>
					<ServicePageCardPrimary
						title='Internal Business Tools'
						content="Design custom software tools that support your teams and eliminate the problems they're designed for."
						secondary={true}
					/>
				</div>
			</div>
			<div className='background-white'>
				<div className='flex flex-col gap-y-12 px-4 py-20 md:mx-12 lg:px-40 xl:mx-40'>
					<div tabIndex='3' id='mobile-development' className='flex flex-col gap-y-4'>
						<h2 className='text-wrap text-3xl text-primary font-black text-center'>Mobile Development</h2>
						<p className='w-fit text-center text-xl leading-10 '>
							A well designed website is often a person's first interaction with your company and should reflect what
							you bring to the table
						</p>
					</div>
					<div className='flex flex-col gap-y-24 items-center md:grid md:grid-cols-2 lg:grid-cols-1 lg:gap-x-12 lg:gap-y-16'>
						<ServicePageCardPrimary
							title='iOS'
							content='Connect to your iOS audience through innovative and optimized mobile applications.'
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-y-12 px-4 py-20 bg-background-secondary md:px-12 lg:px-40 xl:mx-40'>
				<div tabIndex='2' id='app-redesign' className='flex flex-col gap-y-4'>
					<h2 className='text-center text-secondary font-bold text-3xl'>Redesign</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						A well designed website a person's first interaction with your company and should reflect what you bring to
						the table.
					</p>
				</div>
				<div className='flex flex-col gap-y-24 items-center md:grid md:grid-cols-2 lg:gap-x-12 lg:gap-y-16'>
					<ServicePageCardPrimary
						title='Web Redesign'
						content='Reintroduce your presence with a new and improved website design.'
						secondary={true}
					/>
					<ServicePageCardPrimary
						title='Application Redesign'
						content='Modify your existing application to meet your ever changing needs.'
						secondary={true}
					/>
				</div>
			</div>
			<div className='text-xl px-4 py-20 flex flex-col text-center gap-y-4 items-center lg:px-40'>
				<p>
					Not seeing what you're looking for? We're always looking to grow our skills set. Please feel free to contact
					us to discuss.
				</p>
				<ButtonLink label='Contact Us' url='/contact' type='primary' size='large' dark={true}></ButtonLink>
			</div>
			<Footer></Footer>
		</div>
	);
};

export default Services;
