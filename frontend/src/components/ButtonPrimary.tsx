import React from "react";

interface ButtonPrimaryProps {
	label: string;
	action?: () => void;
	type: 'primary'
	size: string;
	outline?: boolean;
	dark: boolean
}

const ButtonPrimary = ({ label, action, type, size, outline, dark }: ButtonPrimaryProps): React.JSX.Element => {
	return (
		<button
			onClick={action}
			className={`outline-2  font-semibold py-2 px-4 text-center rounded-sm  text-sm  duration-100 ${type === 'primary' ? 'text-primary outline-primary hover:bg-primary hover:text-white hover:outline' : 'text-base outline-base hover:bg-base hover:text-background-base'}  lg:px-12`}>
			{label}
		</button>
	);
};

export default ButtonPrimary;
