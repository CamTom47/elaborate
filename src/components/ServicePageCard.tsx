import React from "react";
import { faker } from "@faker-js/faker";
import '../styles/components/ServicePageCard.scss'
interface ServicePageCardProps {
	title: string;
	content: string;
}
const ServicePageCard = ({ title, content }: ServicePageCardProps): React.JSX.Element => {
	return (
		<div className='servicepage-card'>
			<div className='title '>{title}</div>
			<div>
				<p className='content'>{faker.lorem.paragraph(1)}</p>
			</div>
		</div>
	);
};

export default ServicePageCard;
