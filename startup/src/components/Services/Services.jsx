import React, { useState, useEffect, act } from "react";
import ServiceScroller from "./ServiceScroller";

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
		<div className='section-container h-full w-full flex items-start justify-between px-50 overflow-y-visible'>
			<ServiceScroller handleSelection={handleSelection}></ServiceScroller>
			<div className='service-descriptions flex flex-col gap-y-100 h-120 items-center text-stone-900 w-3/4 overflow-y-scroll *:flex *:flex-col *:items-center z-100 scroll-smooth [&_p]:text-center [&_div]:text-center'>
				<div className='scroll-item'>
					<div id='website-development' className='text-stone-900 text-5xl mb-10'>
						Website Development
					</div>
						{sectionContent}
				</div>
				<div className="scroll-item">
					<div id="website-design" className='text-stone-900 text-5xl mb-10'>Website Designing</div>
						{sectionContent}
				</div>
				<div className="scroll-item">
					<div id="website-redesigning" className='text-stone-900 text-5xl mb-10'>Website Redesigning</div>
						{sectionContent}
				</div>
				<div className="scroll-item">
					<div id="cms-website-development" className='text-stone-900 text-5xl mb-10'>CMS Website Development</div>
						{sectionContent}
				</div>
				<div className="scroll-item">
					<div id="web-app-dev" className='text-stone-900 text-5xl mb-10'>Web Application Development</div>
						{sectionContent}
				</div>
				<div className="scroll-item">
					<div id="maintenance" className='text-stone-900 text-5xl mb-10'>Ongoing Maintenance</div>
						{sectionContent}
				</div>
				<div className="scroll-item">
					<div id="hosting" className='text-stone-900 text-5xl mb-10'>Site Hosting</div>
						{sectionContent}
				</div>
				<div className="scroll-item">
					<div id="seo" className='text-stone-900 text-5xl mb-10'>SEO?</div>
					<p>1
						{sectionContent}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Services;
