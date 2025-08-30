import React, { useState } from "react";
import SliderNav from "../../../components/SliderNav";
import { useParams } from "react-router";

const Web_Design_ServicePage = () => {
	const services = ["E-Commerce", "Personal", "Portfolio", "Small Business", "Blogs"];

	const params = useParams();
	const defaultService = params.service_id || services[0].toLowerCase();
	console.log(defaultService);
	const [activeSection, setActiveSection] = useState(defaultService);

	const handleSelection = (e) => {
		e.preventDefault();
		console.log(e);
		setActiveSection(e.target.id);
	};

	return (
		<div className='flex flex-col items-center snap-start snap-always mt-20 mx-20'>
			<div tabIndex='4' id='website-design' className='font-bold text-4xl mb-10 text-center'>
				<p>Web Design</p>
				<p className='text-xl font-medium'>
					A well designed website is often a person's first interaction with your company and should reflect what you
					bring to the table
				</p>
			</div>
			<div className='flex justify w-full mb-10'>
				<SliderNav navList={services} handleSelection={handleSelection}></SliderNav>
			</div>
			<div className='flex flex-col gap-y-10'>
				<div className='flex w-full justify-between'>
					<div className='w-1/2'>
						<p className='text-lg font-semibold'>
							An E-commerce website should strike a fine balance between aesthetics and functionality, and that's what
							our team aims to deliver. We can meet the needs of your project by building a custom platform for your
							team, or utilizing existing CMS software such as Shopify.
						</p>
					</div>
					<div className='w-1/2 flex justify-center'>
						<ul>
							<li>Shopify</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
						</ul>
					</div>
				</div>
				<div className='flex w-full justify-between'>
					<div className='w-1/2'>
						<p>Your Personal website should</p>
					</div>
					<div className='w-1/2 flex justify-center'>
						<ul>
							<li>Shopify</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
						</ul>
					</div>
				</div>
				<div className='flex w-full justify-between'>
					<div className='w-1/2'>
						<p>Portfolio</p>
					</div>
					<div className='w-1/2 flex justify-center'>
						<ul>
							<li>Shopify</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
						</ul>
					</div>
				</div>
				<div className='flex w-full justify-between'>
					<div className='w-1/2'>
						<p>Small Business</p>
					</div>
					<div className='w-1/2 flex justify-center'>
						<ul>
							<li>Shopify</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
						</ul>
					</div>
				</div>
				<div className='flex w-full justify-between'>
					<div className='w-1/2'>
						<p>Blogs</p>
					</div>
					<div className='w-1/2 flex justify-center'>
						<ul>
							<li>Shopify</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
							<li>Custom</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Web_Design_ServicePage;
