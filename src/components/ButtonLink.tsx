import React from "react";
import { Link } from "react-router";

interface ButtonLinkProps {
	label: string;
	action?: () => void;
	url: string;
	type: string;
}

const ButtonLink = ({ label, action, url, type }: ButtonLinkProps): React.JSX.Element => {
	return (
		<Link
			to={url}
			className={`w-fit ${
				type === "primary"
					? "text-white bg-blue-500 hover:bg-white hover:outline-blue-500 hover:outline hover:text-blue-500"
					: "text-blue-500 bg-white hover:bg-blue-500 hover:outline-white hover:outline hover:text-white"
			}  text-md font-semibold py-2 px-3 rounded-md duration-200 h-8 text-nowrap flex	justify-center items-center`}>
			{label}
		</Link>
	);
};

export default ButtonLink;
