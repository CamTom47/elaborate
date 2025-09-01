import React from "react";
import { faker } from "@faker-js/faker";
interface ServicePageCardProps {
	title: string;
	content: string;
}
const ServicePageCard = ({ title, content }: ServicePageCardProps): React.JSX.Element => {
	return (
		<div className='rounded-xl flex flex-col w-full justify-between p-6 shadow-2xl bg-white'>
			<div className='text-blue-500 font-semibold text-xl mb-4'>{title}</div>
			<div>
				<p className='text- text-black pb-4'>{faker.lorem.paragraph(1)}</p>
			</div>
		</div>
	);
};

export default ServicePageCard;
