import React from "react";
import { Link } from "react-router";

const ServiceCard = ({ title, description, url, icon }) => {
	return (
		// <Link to={url}>
		// 	<div className='outline outline-sky-500 bg-slate-950 shadow-md shadow-slate-950 h-60 rounded-xl p-4 hover:shadow-lg hover:shadow-slate-800 hover:outline-sky-400 hover:[&_h2]:text-sky-300 hover:bg-slate-900 hover:duration-500'>
		// 		<h2 className='text-sky-400 text-2xl'>{title}</h2>
		// 		<p className='text-slate-100'>{description}</p>
		// 	</div>
		// </Link>
		<Link to={url}>
			<div className='bg-sky-500 shadow-md h-40 rounded-xl p-4 hover:shadow-lg'>
				<div className='flex justify-between items-start p-0'>
					<h2 className='text-sky-950 font-semibold text-2xl pb-6'>{title}</h2>
					<div className='outline-2 outline-slate-950 rounded-full p-2 size-fit'>{icon}</div>
				</div>
				<p className='text-slate-950'>{description}</p>
			</div>
		</Link>
	);
};

export default ServiceCard;
