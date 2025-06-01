import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import ServiceScroller from "./ServiceScroller";
import ServiceCard from "./ServiceCard";

import "./Services.css";

const ServiceSection = () => {
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
		<div className='flex flex-col justify-left items-left h-screen w-screen bg-stone-900 px-30 py-10'>
			<h1 className='text-6xl text-right font-black text-lime-600 bg-stone-900'>Services</h1>
			<div className='section-container hide-scroll overflow-x-hidden snap-y snap-mandatory m-0 p-0'>
				<div className='snap-end bg-stone-900 h-180 w-screen'></div>
				<div className=' flex justify-between h-screen text-stone-300 pt-20 snap-start'>
					<ServiceScroller handleSelection={handleSelection} scrollPosition={scrollPosition}></ServiceScroller>
					<div
						onScroll={handleScroll}
						className='service-descriptions hide-scroll gap-y-50 flex flex-col h-120  items-center text-stone-50 w-3/4 *:flex *:flex-col *:items-center scroll-smooth [&_p]:text-center [&_div]:text-center pb-100 '>
						<div className='scroll-item'>
							<div tabIndex='0' id='website-development' className='text-stone-50 text-5xl mb-10'>
								Website Development
							</div>
							{sectionContent}
						</div>
						<div className='scroll-item'>
							<div tabIndex='1' id='website-design' className='text-stone-50 text-5xl mb-10'>
								Website Design
							</div>
							{sectionContent}
						</div>
						<div className='scroll-item'>
							<div tabIndex='2' id='website-redesign' className='text-stone-50 text-5xl mb-10'>
								Website Redesign
							</div>
							{sectionContent}
						</div>
						<div className='scroll-item'>
							<div tabIndex='3' id='cms-website-development' className='text-stone-50 text-5xl mb-10'>
								CMS Website Development
							</div>
							{sectionContent}
						</div>
						<div className='scroll-item'>
							<div tabIndex='4' id='web-app-dev' className='text-stone-50 text-5xl mb-10'>
								Web Application Development
							</div>
							{sectionContent}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceSection;
