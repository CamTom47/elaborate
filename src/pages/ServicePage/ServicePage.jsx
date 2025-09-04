import { useState, useEffect } from "react";
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
		<div className="service-page-container">
			<div className='service-page-section'>
				<div tabIndex='4' id='website-design' className='service-page-section-header'>
					<h2>Web Design</h2>
					<p>
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
			<div className='service-page-section'>
				<div
					tabIndex='4'
					id='web-app-development'
					className='service-page-section-header'>
					<p className='text-xl font-medium w-1/2'>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
					<h2>Web Development</h2>
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
			<div className='service-page-section'>
				<div
					tabIndex='3'
					id='mobile-development'
					className='service-page-section-header'>
					<h2>Mobile Development</h2>
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
			<div className='service-page-section'>
				<div tabIndex='2' id='app-redesign' className='service-page-section-header'>
					<p className='text-xl font-medium w-1/2'>
						A well designed website is often a person's first interaction with your company and should reflect what you
						bring to the table
					</p>
					<h2>Website Redesign</h2>
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
