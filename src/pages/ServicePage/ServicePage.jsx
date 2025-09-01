import { useState, useEffect } from "react";

import "./Services.css";
import DropdownNav from "../../components/DropdownNav";
import ServicePageCard from "../../components/ServicePageCard";
import ButtonLink from "../../components/ButtonLink";

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
		<div className='section-container h-fit w-full flex flex-col gap-y-20 items-center justify-between bg-linear-to-r from-blue-600 from-10% via-blue-500 via-50% to-blue-600 to-90% py-10 px-80'>
			{/* <div className='text-center'>
				<h1 className='text-5xl font-bold text-white'>Services</h1>
				<p className='text-2xl text-white'>
					At Simply, we offer a variety of services that are tailored to meet your project needs.{" "}
				</p>
			</div> */}
			{/* <DropdownNav navList={services} handleSelection={handleSelection} scrollPosition={scrollPosition}></DropdownNav> */}
			<div className='flex flex-col snap-start snap-always gap-y-20'>
				<div tabIndex='4' id='website-design' className='font-bold text-4xl text-left flex text-white justify-between'>
					<p className='w-1/4'>Web Design</p>
					<p className='text-xl font-medium w-1/2'>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
				</div>
				<div className='relative grid grid-cols-3 gap-6'>
					<ServicePageCard
						title='E-Commerce'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='Personal Website'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='Portfolio'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='Small Business'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='Blog'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
				</div>
				<hr className='text-blue-300' />
			</div>
			<div className='flex flex-col snap-start snap-always gap-y-10'>
				<div
					tabIndex='4'
					id='web-app-development'
					className='font-bold text-4xl text-left flex text-white justify-between'>
					<p className='text-xl font-medium w-1/2'>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
					<p className='w-1/4 text'>Web Development</p>
				</div>
				<div className='grid grid-cols-3 gap-6 gap-y-10'>
					<ServicePageCard
						title='APIs'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='Applications'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
				</div>
				<hr className='text-blue-300' />
			</div>
			<div className='flex flex-col snap-start snap-always gap-y-10'>
				<div
					tabIndex='3'
					id='mobile-development'
					className='font-bold text-4xl text-left flex text-white justify-between'>
					<p className='w-1/4'>Mobile Development</p>
					<p className='text-xl font-medium w-1/2'>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
				</div>
				<div className='grid grid-cols-3 gap-6 gap-y-10'>
					<ServicePageCard
						title='React Native'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='iOS'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='Android'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
				</div>
				<hr className='text-blue-300' />
			</div>
			<div className='flex flex-col snap-start snap-always gap-y-10'>
				<div tabIndex='2' id='app-redesign' className='font-bold text-4xl text-left flex text-white justify-between'>
					<p className='text-xl font-medium w-1/2'>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
					<p className='w-1/4'>Website Redesign</p>
				</div>
				<div className='grid grid-cols-3 gap-6 gap-y-10'>
					<ServicePageCard
						title='Web Redesign'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
					<ServicePageCard
						title='Application Redesign'
						content="An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
								our team aims to deliver. We can meet the needs of your project by building a custom platform for your
								team, or utilizing existing CMS software such as Shopify."
					/>
				</div>
				<hr className='text-blue-300' />
			</div>
			<div className='flex flex-col items-center'>
				<div className='font-bold text-4xl mb-10 text-center text-white '>
					<p className='text-xl font-medium'>
						Not seeing what you're looking for? We're always looking to grow our skills set. Please feel free to contact
						us to discuss.
					</p>
				</div>
				<ButtonLink label='Contact Us' url='/contact' type='secondary'></ButtonLink>
			</div>
		</div>
	);
};

export default Services;
