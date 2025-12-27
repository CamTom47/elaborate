import { useState, useEffect } from "react";
import DropdownNav from "../../components/DropdownNav";
import ServicePageCardPrimary from "../../components/ServicePageCardPrimary";
import ButtonLink from "../../components/ButtonLink";
import Footer from "../../components/Footer";
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
		<div className={`flex flex-col h-fit w-full items-center bg-background-primary`}>
			<div className='@container relative flex flex-col items-center gap-y-12 px-4 py-40 w-full md:mx-12'>
				<div className='absolute bg-[url(/art/frameworks-development-stair-frames-3-peach.png)] bg-size-[auto_120px] bg-no-repeat bg-origin-padding bg-bottom-left p-24 right-0 top-0 rotate-180 md:bg-size-[auto_160px]'></div>
				<div tabIndex='4' id='website-design' className='@2xl:w-3/4 @7xl:w-1/2 relative flex flex-col gap-y-4'>
					<h2 className='text-wrap text-3xl text-primary font-black text-center pt-6'>Web Design</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						A well designed website a person's first interaction with your company and should reflect what you bring to
						the table.
					</p>
				</div>
				<div className='@lg:w-full @3xl:w-3/4 @7xl:w-1/2 flex flex-col gap-y-24 items-center md:grid md:grid-cols-2 md:place-items-center lg:gap-x-12 lg:gap-y-16 xl:grid-cols-3'>
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
			<div className='@container relative flex flex-col items-center gap-y-12 px-4 py-40 w-full bg-background-secondary md:mx-12 '>
				<div className='absolute bg-[url(/art/frameworks-development-stair-frames-1-cream.png)] bg-size-[auto_120px] bg-no-repeat bg-origin-border bg-bottom-right p-28 left-0 top-0 rotate-90 scale-x-[-1] md:bg-top-left md:rotate-0 md:scale-x-[1] md:left-0 md:top-0 md:bg-size-[auto_160px]'></div>
				<div tabIndex='4' id='web-app-development' className='@2xl:w-3/4 @7xl:w-1/2 flex flex-col gap-y-4'>
					<h2 className='text-center text-secondary font-bold text-3xl pt-6'>Web Development</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						Bring your ideas to life faster than ever with modernized technologies.
					</p>
				</div>
				<div className='@lg:w-full @3xl:w-3/4 @7xl:w-1/2 flex flex-col gap-y-24 items-center md:grid md:grid-cols-2 md:place-items-center lg:gap-x-12 lg:gap-y-16 xl:grid-cols-3'>
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
			<div className='@container relative flex flex-col items-center gap-y-12 px-4 py-40 w-full md:mx-12'>
				<div className='absolute bg-[url(/art/frameworks-development-stair-frames-1-peach.png)] bg-size-[auto_120px] bg-no-repeat bg-origin-border bg-top-left p-28 right-0 top-0 rotate-90 md:rotate-0 md:scale-x-[-1] md:top-0 md:bg-size-[auto_160px]'></div>
				<div tabIndex='3' id='mobile-development' className=' relative @2xl:w-3/4 @7xl:w-1/2 flex flex-col gap-y-4'>
					<h2 className='text-wrap text-3xl text-primary font-black text-center pt-6'>Mobile Development</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						Reach your audience where they are by designing, building, and deploying your applications to mobile.
					</p>
				</div>
				<div className='@lg:w-full @3xl:w-3/4 @7xl:w-1/2 flex flex-col gap-y-24 items-center md:grid md:grid-cols-2 md:place-items-center lg:gap-x-12 lg:gap-y-16 xl:grid-cols-3'>
					<ServicePageCardPrimary
						title='iOS'
						content='Connect to your iOS audience through innovative and optimized mobile applications.'
					/>
				</div>
			</div>
			<div className='@container relative flex flex-col items-center gap-y-12 px-4 py-40 w-full bg-background-secondary md:mx-12 '>
				<div className='absolute bg-[url(/art/frameworks-development-stair-frames-2-cream.png)] bg-size-[auto_120px] bg-no-repeat bg-origin-border bg-bottom-right p-28 left-0 top-0 rotate-90 scale-x-[-1] md:top-0 md:bg-size-[auto_160px]'></div>
				<div tabIndex='2' id='app-redesign' className='relative @2xl:w-3/4 @7xl:w-1/2 flex flex-col gap-y-4'>
					<h2 className='text-center text-secondary font-bold text-3xl pt-6'>Redesign</h2>
					<p className='w-fit text-center text-xl leading-10 '>
						Update your your existing website/application with a modern and intuitive design.
					</p>
				</div>
				<div className='@lg:w-full @3xl:w-3/4 @7xl:w-1/2 flex flex-col gap-y-24 items-center md:grid md:grid-cols-2 md:place-items-center lg:gap-x-12 lg:gap-y-16 xl:grid-cols-3'>
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
			<div className='text-xl px-4 py-60 flex flex-col text-center gap-y-4 items-center lg:px-40 md:w-3/4 2xl:w-1/2'>
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
