import React, { useState, useEffect } from "react";
import ServiceScroller from "./ServiceScroller";
import WebApp_Dev_ServicePage from "./WebApp_Dev_ServicePage/WebApp_Dev_ServicePage";
import MobileApp_Dev_ServicePage from "./MobileApp_Dev_ServicePage/MobileApp_Dev_ServicePage";
import Web_Design_ServicePage from "./Web_Design_ServicePage/Web_Design_ServicePage";
import Web_Redesign_ServicePage from "./Web_Redesign_ServicePage/Web_Redesign_ServicePage";

import "./Services.css";

const Services = () => {
	const services = {
		"Website Development": "Website Development Content",
		"Website Designing": "Website Designing Content",
		"Website Redesigning": "Website Redesigning Content",
		"CMS Website Development": "CMS Website Development Content",
		"Web Application Development": "Web Application Development Content",
		"Ongoing Maintenance": "Ongoing Maintenance Content",
		"Site Hosting": "Site Hosting Content",
		"SEO?": "SEO Content",
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
	const handleSelection = (e) => {
		// setActiveSection(e.target.innerHTML);
	};

	const generateHTML = () => {
		if (activeSection === "Website Development") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		} else if (activeSection === "Website Designing") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		} else if (activeSection === "Website Redesigning") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		} else if (activeSection === "CMS Website Development") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		} else if (activeSection === "Web Application Development") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		} else if (activeSection === "Ongoing Maintenance") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		} else if (activeSection === "Site Hosting") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		} else if (activeSection === "SEO?") {
			setSectionContent(
				<div>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea provident consequatur beatae quaerat ipsa
					aspernatur ratione similique facilis nam itaque laborum, iste alias inventore modi, mollitia illo ullam harum?
					Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio perferendis exercitationem minus voluptas
					natus ipsa molestias obcaecati, corrupti cumque at ratione magni maiores necessitatibus odio laudantium
					voluptates enim. Explicabo, expedita. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non id
					assumenda, possimus repellendus eius accusamus fuga culpa officiis esse ullam, ea repellat dignissimos?
					Accusamus voluptas delectus quisquam voluptatem commodi doloribus!
				</div>
			);
		}
	};

	useEffect(() => {
		generateHTML();
	}, [activeSection]);

	return (
		<div className='section-container h-fit w-full flex flex-col items-start justify-between bg-linear-to-r from-white to-sky-200'>
			<div id='service-description'>
				<h1 className='text-4xl font-semibold pt-10 ps-20'>Services</h1>
			</div>
			<div id='process-description'>
				<div>
					Our design and developmenet practices revolve around one thing. The Customer. 
				</div>
				<div className='grid grid-cols-3 gap-4 m-auto'>
					<div className='relative flex flex-col justify-between bg-linear-to-r/oklab from-sky-100 to-sky-200 shadow-lg/20 size-80 rounded-xl p-4 hover:shadow-lg  hover:bg-linear-to-r/oklab hover:from-sky-200 hover:to-sky-300 hover:duration-150 '>
						<div className='flex flex-col gap-y-4'>
							<div className='flex gap-x-4'>
								<h2 className='text-xl font-semibold'>01</h2>
								<h2 className='text-sky-950 font-semibold text-xl'>Research</h2>
							</div>
							<p className='text-sm text-black pb-4'>Lorem ipsum dolor sit praesentium maxime!</p>
						</div>
					</div>
					<div className='relative flex flex-col justify-between bg-linear-to-r/oklab from-sky-100 to-sky-200 shadow-lg/20 size-80 rounded-xl p-4 hover:shadow-lg  hover:bg-linear-to-r/oklab hover:from-sky-200 hover:to-sky-300 hover:duration-150 '>
						<div className='flex flex-col gap-y-4'>
							<div className='flex gap-x-4'>
								<h2 className='text-xl font-semibold'>02</h2>
								<h2 className='text-sky-950 font-semibold text-xl'>Design</h2>
							</div>
							<p className='text-sm text-black pb-4'>Lorem ipsum dolor sit praesentium maxime!</p>
						</div>
					</div>
					<div className='relative flex flex-col justify-between bg-linear-to-r/oklab from-sky-100 to-sky-200 shadow-lg/20 size-80 rounded-xl p-4 hover:shadow-lg  hover:bg-linear-to-r/oklab hover:from-sky-200 hover:to-sky-300 hover:duration-150 '>
						<div className='flex flex-col gap-y-4'>
							<div className='flex gap-x-4'>
								<h2 className='text-xl font-semibold'>03</h2>
								<h2 className='text-sky-950 font-semibold text-xl'>Develop</h2>
							</div>
							<p className='text-sm text-black pb-4'>Lorem ipsum dolor sit praesentium maxime!</p>
						</div>
					</div>
					<div className='relative flex flex-col justify-between bg-linear-to-r/oklab from-sky-100 to-sky-200 shadow-lg/20 size-80 rounded-xl p-4 hover:shadow-lg  hover:bg-linear-to-r/oklab hover:from-sky-200 hover:to-sky-300 hover:duration-150 '>
						<div className='flex flex-col gap-y-4'>
							<div className='flex gap-x-4'>
								<h2 className='text-xl font-semibold'>04</h2>
								<h2 className='text-sky-950 font-semibold text-xl'>Test</h2>
							</div>
							<p className='text-sm text-black pb-4'>Lorem ipsum dolor sit praesentium maxime!</p>
						</div>
					</div>
					<div className='relative flex flex-col justify-between bg-linear-to-r/oklab from-sky-100 to-sky-200 shadow-lg/20 size-80 rounded-xl p-4 hover:shadow-lg  hover:bg-linear-to-r/oklab hover:from-sky-200 hover:to-sky-300 hover:duration-150 '>
						<div className='flex flex-col gap-y-4'>
							<div className='flex gap-x-4'>
								<h2 className='text-xl font-semibold'>05</h2>
								<h2 className='text-sky-950 font-semibold text-xl'>Deployment</h2>
							</div>
							<p className='text-sm text-black pb-4'>Lorem ipsum dolor sit praesentium maxime!</p>
						</div>
					</div>
					<div className='relative flex flex-col justify-between bg-linear-to-r/oklab from-sky-100 to-sky-200 shadow-lg/20 size-80 rounded-xl p-4 hover:shadow-lg  hover:bg-linear-to-r/oklab hover:from-sky-200 hover:to-sky-300 hover:duration-150 '>
						<div className='flex flex-col gap-y-4'>
							<div className='flex gap-x-4'>
								<h2 className='text-xl font-semibold'>06</h2>
								<h2 className='text-sky-950 font-semibold text-xl'>Maintenance</h2>
							</div>
							<p className='text-sm text-black pb-4'>Lorem ipsum dolor sit praesentium maxime!</p>
						</div>
					</div>
				</div>
			</div>
			<h1>Process</h1>
			<ServiceScroller handleSelection={handleSelection} scrollPosition={scrollPosition}></ServiceScroller>
			<div onScroll={handleScroll}>
				<Web_Design_ServicePage></Web_Design_ServicePage>
				<WebApp_Dev_ServicePage></WebApp_Dev_ServicePage>
				<MobileApp_Dev_ServicePage></MobileApp_Dev_ServicePage>
				<Web_Redesign_ServicePage></Web_Redesign_ServicePage>
			</div>
		</div>
	);
};

export default Services;
