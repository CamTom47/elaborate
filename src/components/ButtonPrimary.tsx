import React from "react";
import "../styles/components/ButtonPrimary.scss";

interface ButtonPrimaryProps {
	label: string;
	action?: () => void;
	type: string;
	size: string;
	outline?: boolean;
}

const ButtonPrimary = ({ label, action, type, size, outline }: ButtonPrimaryProps): React.JSX.Element => {
	return (
		<button
			onClick={action}
			className={`primary-button ${type === "primary" ? "blue" : ""} ${size} ${outline === true ? "outline" : ""}`}>
			{label}
		</button>
	);
};

export default ButtonPrimary;
