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
		<div className='section-container h-fit w-full flex flex-col items-start justify-between'>
			<ServiceScroller handleSelection={handleSelection} scrollPosition={scrollPosition}></ServiceScroller>
			<div
				onScroll={handleScroll}
				className='service-descriptions flex flex-col gap-y-100 items-center text-stone-900 w-3/4 *:flex *:flex-col *:items-center scroll-smooth [&_p]:text-center [&_div]:text-center'>
				<WebApp_Dev_ServicePage></WebApp_Dev_ServicePage>
				<MobileApp_Dev_ServicePage></MobileApp_Dev_ServicePage>
				<Web_Design_ServicePage></Web_Design_ServicePage>
				<Web_Redesign_ServicePage></Web_Redesign_ServicePage>
			</div>
		</div>
	);
};

export default Services;
