import React from "react";
import { faker } from "@faker-js/faker";
interface ServicePageCardPrimaryProps {
	title: string;
	content: string;
	secondary: boolean;
}
const ServicePageCardPrimary = ({ title, content, secondary = false }: ServicePageCardPrimaryProps): React.JSX.Element => {
	return (
		<div className={`flex flex-col w-72 relative box-border gap-y-4 pt-4 border-t ${!secondary ? 'border-primary' : 'border-secondary'} xl:w-fit`}>
			<h2 className={`bg-primary-dark ${!secondary ? 'text-primary' : 'text-secondary'} text-center font-bold text-xl w-full xl:w-80`}>{title}</h2>
			<p className={`text-center rounded-md h-32 ${secondary ? 'text-secondary' : ''} xl:text-sm w-full xl:w-80`}>{content}</p>
		</div>
	);
};

export default ServicePageCardPrimary;
