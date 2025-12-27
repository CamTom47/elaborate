import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link, useParams } from "react-router";
import ButtonLink from "./ButtonLink";
import HamburgerMenu from "./HamburgerMenu";
import logo from "../assets/content/frameworks-development-logo-teal.png";
import icon from "../assets/content/frameworks-development-icon-teal.png";

const Navbar = ({ isTopOfScreen }) => {
	const [screenWidth, setScreenWidth] = useState(window.outerWidth);
	const [activeNav, setActiveNav] = useState("");
	const [showHambuger, setShowHamburger] = useState(screenWidth <= 430);
	const [topOfNav, setTopOfNav] = useState(0);
	const [showNav, setShowNav] = useState(false);

	//create a ref that will prevent certain useEffects from running on first mount
	const navbarHeight = useRef(null);

	//Get the mounted navbar element and set the navbar state to it.
	useEffect(() => {
		const currentNavbar = document.getElementById("navbar");
		const isInitialMount = currentNavbar.offsetTop === 0 && (navbarHeight.current === 0 || !navbarHeight.current);
		let topOfNav;
		if (currentNavbar.offsetTop === 0) {
			setTopOfNav(0);
		} else {
			setTopOfNav(currentNavbar.offsetTop);
		}

		//
		if (!isInitialMount) {
			/**
			 * if we are at the top of the screen and it is not the initial mount.
			 *  - show icon offscreen, add exit animation
			 * 	- show logo onscreen, add enter animation
			 *  - show button onscreen, add enter animation
			 *
			 * ICON EXIT
			 * BUTTON ENTER
			 * LOGO ENTER
			 */
			if (currentNavbar.offsetTop === 0) {
				//icon related
				const icon = document.getElementById("icon");
				icon.classList.remove("lg:animate-iconEnter");
				icon.classList.add("lg:translate-x-[-240px]");
				icon.classList.add("lg:animate-iconLeave");

				const contactButton = document.getElementById("contactButton");
				contactButton.classList.remove("lg:translate-x-[-240px]");
				contactButton.classList.remove("lg:animate-buttonLeave");
				contactButton.classList.add("lg:animate-buttonEnter");

				const logo = document.getElementById("logo");
				logo.classList.remove("lg:translate-y-[-240px]");
				logo.classList.remove("lg:animate-logoLeave");
				logo.classList.add("lg:animate-logoEnter");
			}

			/**
			 * if we are not at the top of the screen and it is not the initial mount.
			 * -show icon onscreen, add enter animation
			 * -show logo offscreen, add exit animation
			 * -show button offscreen, add exit animation
			 *
			 * ICON ENTER
			 * BUTTON EXIT
			 * LOGO EXIT
			 */
			if (currentNavbar.offsetTop !== 0) {
				//icon related
				const icon = document.getElementById("icon");
				icon.classList.remove("lg:translate-x-[-240px]");
				icon.classList.remove("lg:animate-iconLeave");
				icon.classList.add("lg:animate-iconEnter");

				const contactButton = document.getElementById("contactButton");
				contactButton.classList.remove("lg:animate-buttonEnter");
				contactButton.classList.add("lg:translate-x-[-240px]");
				contactButton.classList.add("lg:animate-buttonLeave");

				const logo = document.getElementById("logo");
				logo.classList.remove("lg:animate-logoEnter");
				logo.classList.add("lg:translate-y-[-240px]");
				logo.classList.add("lg:animate-logoLeave");
			}
		}

		navbarHeight.current = document.getElementById("navbar").offsetTop;
	}, [isTopOfScreen]);

	//set topOfNavbar state after subsequent renderings.

	// window.addEventListener('scroll', () => console.log('scroll'))
	return (
		<div
			id='navbar'
			className='box-border sticky top-0 flex flex-col h-(--navbar) bg-background-primary border-b border-background-secondary z-20 lg:border-none lg:bg-transparent'>
			<div className='grid grid-cols-3 relative justify-between items-start pt-8 pb-4 px-9 w-full 2xl:pt-16 2xl:px-20'>
				{/* <div className='flex gap-x-2 justify-start items-center md:hidden'>
					<a href='mailto:hello@frameworksdev.com' className='m-0 p-0'>
						<svg className='text-base' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44'
							/>
						</svg>
					</a>
				</div> */}
				<div className='relative'>
					<a id='icon' href='/' className={`hidden lg:absolute lg:flex items-center size-8 lg:translate-x-[-240px]`}>
						<img src={icon} alt='Frameworks Development Icon' />
					</a>
					<div id='contactButton' className={`hidden md:absolute md:block `}>
						<ButtonLink label='Contact' url='/contact' type={"primary"}></ButtonLink>
					</div>
				</div>
				<a id='logo' href='/' className={`flex mx-auto items-center size-32 -translate-y-1/4 xl:size-42`}>
					<img src={logo} alt='Frameworks Development Logo' />
				</a>
				<div className='flex justify-end'>
					<HamburgerMenu action={() => setShowNav(!showNav)}></HamburgerMenu>
				</div>
			</div>

			{showNav ? (
				//HAMBURGER ACTIVE LINKS
				<div
					id='hamburger-nav'
					className='absolute flex bottom-0 left-1/2 -translate-x-1/2 justify-center mx-auto items-center min-w-12 w-7/8 max-w-120 h-fit  **:text-md **:w-full **:text-center **:py-2 **:text-base animate-opennav origin-top lg:right-8 lg:top-20 lg:left-auto lg:items-end lg:translate-x-0 lg: lg:flex-col lg:w-1/4 lg:**:text-end 2xl:top-28 2xl:right-20'>
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
