import React from "react";
import { Link } from "react-router";

interface ButtonLinkProps {
	label: string;
	action?: () => void;
	url: string;
	type: string;
	size: string;
	outline: boolean;
	dark: boolean;
}

const ButtonLink = ({
	label,
	action,
	url,
	type,
	size = "medium",
	outline,
	dark,
}: ButtonLinkProps): React.JSX.Element => {
	return (
		<Link
			reloadDocument
			scrollrestoration='true'
			to={url}
			className={`outline-2  font-semibold py-2 px-4 text-center rounded-sm  text-sm  duration-100 ${type === 'primary' ? 'text-primary outline-primary hover:bg-primary hover:text-white hover:outline' : 'text-base outline-base hover:bg-base hover:text-background-base hover:text-background-secondary'} lg:w-fit lg:px-4`}>
			{label}
		</Link>
	);
};

export default ButtonLink;
