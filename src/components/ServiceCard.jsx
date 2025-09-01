import ButtonLink from "./ButtonLink";
const ServiceCard = ({ title, description, url, icon }) => {
	return (
		<div className='flex flex-col justify-between bg-white p-4 rounded-xl h-50 shadow-xl'>
			<div className='flex w-full justify-between'>
				<h2 className='text-blue-500 font-semibold text-2xl'>{title}</h2>
				<span className="text-blue-500">{icon}</span>
			</div>
			<p className='text-md text-black pb-4'>{description}</p>
			<ButtonLink label={`See ${title} Services`} url={url} type="primary"/>
		</div>
	);
};

export default ServiceCard;
