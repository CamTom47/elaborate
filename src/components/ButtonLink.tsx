import React from "react";
import { Link } from "react-router";
import '../styles/components/ButtonLink.scss';

interface ButtonLinkProps {
	label: string;
	action?: () => void;
	url: string;
	type: string;
	size: string;
}

const ButtonLink = ({ label, action, url, type, size = 'medium' }: ButtonLinkProps): React.JSX.Element => {
	return (
		<Link to={url} className={`primary-button ${type === "primary" ? "blue" : ""} ${size}`}>
			{label}
		</Link>
	);
};

export default ButtonLink;
