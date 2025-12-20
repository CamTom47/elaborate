import React from "react";
import { faker } from "@faker-js/faker";
interface ServicePageCardPrimaryProps {
	title: string;
	content: string;
	secondary: boolean;
}
const ServicePageCardPrimary = ({ title, content, secondary }: ServicePageCardPrimaryProps): React.JSX.Element => {
	return (
		<div className="flex flex-col w-72 relative box-border xl:w-fit">
			<h2 className='bg-primary-dark text-white font-bold text-xl p-4 me-8 rounded-md h-36 w-full xl:w-80'>{title}</h2>
			<p className={`absolute ${secondary ? 'bg-secondary text-white' : 'bg-primary'} top-12 ms-8 p-4 rounded-md h-32 xl:text-sm w-full xl:w-80`}>{content}</p>
		</div>
	);
};

export default ServicePageCardPrimary;
