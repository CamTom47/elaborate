import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import ButtonLink from "./ButtonLink";
import logo from "../assets/content/frameworks-development-logo-teal.png";

const Navbar = () => {
	const [screenWidth, setScreenWidth] = useState(window.outerWidth);
	const [activeNav, setActiveNav] = useState("");
	const [showHambuger, setShowHamburger] = useState(screenWidth <= 430);
	const [showNav, setShowNav] = useState(false);

	return (
		<div className='sticky top-0 flex flex-col bg-background-primary border-b border-background-secondary z-20'>
			<div className='flex justify-between items-center py-6 px-9 h-fit w-full 2xl:pt-16 2xl:px-20'>
				<div className='hidden md:block'>
					<ButtonLink label='Contact' url='/' type={"primary"}></ButtonLink>
				</div>
				<a href='/' className='flex items-center size-24'>
					<img src={logo} alt='Frameworks Development Logo' />
				</a>
				<div className='relative right-8 h-fit w-fit' onClick={() => setShowNav(!showNav)}>
					<span className='absolute left-1/2 w-7 h-1 bg-base rounded-full '></span>
					<span className='absolute top-1/2 w-7 h-1 bg-base rounded-full rotate-90'></span>
				</div>
			</div>

			{showNav ? (
				//HAMBURGER ACTIVE LINKS
				<div
					id='hamburger-nav'
					className='top-18 left-0 flex items-center w-screen h-fit  **:text-md **:w-screen **:text-center **:py-2 animate-opennav origin-top'>
					<Link reloadDocument scrollrestoration='true' to='/about'>
						About
					</Link>
					<Link reloadDocument scrollrestoration='true' to='/services'>
						Services
					</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link reloadDocument scrollrestoration='true' to='/contact'>
						Contact
					</Link>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default Navbar;
