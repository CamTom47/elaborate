import ButtonLink from "./ButtonLink";
import "../styles/components/ServiceCard.scss";

const ServiceCard = ({ title, description, url, icon }) => {
	return (
		<div className='servicecard-container'>
			<div className='card-row'>
				<h2 className='card-header'>{title}</h2>
				<span>{icon}</span>
			</div>
			<p className='card-description'>{description}</p>
			<ButtonLink label={`${title} Services`} url={url} type='primary' />
		</div>
	);
};

export default ServiceCard;
