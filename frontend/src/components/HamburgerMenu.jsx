import React from "react";

const HamburgerMenu = ({action, active}) => {
	return (
		<div className={`relative h-8 w-8 ${active ? 'rotate-135' : ''} duration-300`} onClick={() => action()}>
			{/* <span className=' w-full h-px bg-base rounded-full '></span>
			<span className=' w-full h-px bg-base rounded-full rotate-90'></span> */}
            <div className="absolute h-0.5 bg-base w-full rounded-full top-1/2 -translate-y-1/4"></div>
            <div className="absolute h-0.5 bg-base w-full rounded-full top-1/2 -translate-y-1/4 rotate-90"></div>
		</div>
	);
};

export default HamburgerMenu;
