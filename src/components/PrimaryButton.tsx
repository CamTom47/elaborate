import React from "react";
import { Link } from "react-router";

interface PrimaryButtonProps {
	label: string;
	action?: () => void;
	type: string;
}

const PrimaryButton = ({ label, action, type }: PrimaryButtonProps): React.JSX.Element => {
	return (
		<button
			onClick={action}
			className={`w-fit ${
				type === "primary"
					? "text-white bg-blue-500 hover:bg-white hover:outline-blue-500 hover:outline hover:text-blue-500"
					: "text-blue-500 bg-white hover:bg-blue-500 hover:outline-white hover:outline hover:text-white"
			}  text-lg py-2 px-3 rounded-md  duration-200`}>
			{label}
		</button>
	);
};

export default PrimaryButton;
