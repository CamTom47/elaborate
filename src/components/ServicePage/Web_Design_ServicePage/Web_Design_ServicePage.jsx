import React, { useState } from "react";
import ListNavigator from "../ListNavigator";
import { useParams } from "react-router";

const Web_Design_ServicePage = () => {
	const services = ["E-Commerce", "Personal", "Portfolio", "Small Business", "Blogs", "CMS Solutions"];

	const params = useParams();
	const defaultService = params.service_id || services[0].toLowerCase();
	console.log(defaultService)
	const [activeSection, setActiveSection] = useState(defaultService);

	const handleSelection = (e) => {
		e.preventDefault();
		console.log(e)
		setActiveSection(e.target.id)
	}

	return (
		<div className='flex flex-col items-center snap-start snap-always mt-20 mx-20'>
			<div tabIndex='4' id='website-design' className='text-black font-medium text-4xl mb-10'>
				Web Design
			</div>
			<div className='flex justify w-7/8 mb-10'>
				<ListNavigator navList={services} handleSelection={handleSelection}></ListNavigator>
			</div>
			<div className='flex w-full'>
				<div className='w-1/2'>
					<p className='text-black'>
						A website is most people's first glance at a business, and our team strongly believes that it should
						showcase the level of value and quality your company brings to the table. At Construe we recognize the
						importance of getting the small details correct, and pride ourselves on working hand in hand with our
						clients at all steps of the project to ensure a successful handoff.{" "}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Web_Design_ServicePage;
