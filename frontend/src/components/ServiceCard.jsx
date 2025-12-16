import ButtonLink from "./ButtonLink";

const ServiceCard = ({ title, description, url, icon }) => {
	return (
		<div className='relative flex flex-col justify-between items-center h-100 w-90 md:w-80 md:h-80 py-9 px-6 rounded-md bg-white xl:w-80' style={{boxShadow: '0 0 10px 0 gray'}}>
			<h2 className='text-primary-dark font-semibold text-3xl md:text-2xl'>{title}</h2>
			<div className='absolute -right-4 -top-4 bg-primary p-2 rounded-full border border-primary-dark'>{icon}</div>
			<p className='w-full text-center text-xl md:text-lg'>{description}</p>
			<ButtonLink label={`${title} Services`} url={url} type='primary' dark={true} />
		</div>
	);
};

export default ServiceCard;
