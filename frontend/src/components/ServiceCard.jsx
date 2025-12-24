import ButtonLink from "./ButtonLink";

const ServiceCard = ({ title, description, url, icon }) => {
	return (
		<div className='relative flex flex-col justify-between items-center min-h-86 h-fit max-h-120 gap-y-12 w-90 py-9 px-6 rounded-md text-secondary xl:w-80'>
			<div className="flex flex-col gap-y-4 text-center"> 
				<h2 className='text-primary-dark font-semibold text-2xl md:text-2xl'>{title}</h2>
				<p className='w-full text-center text-xl md:text-lg'>{description}</p>
			</div>
			<ButtonLink label={`${title} Services`} url={url} type='secondary' dark={true} />
		</div>
	);
};

export default ServiceCard;
