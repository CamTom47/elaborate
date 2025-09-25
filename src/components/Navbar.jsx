import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "../styles/components/Navbar.scss";

const Navbar = () => {
	const [navbarHidden, setNavbarHidden] = useState(false);
	const [lastScrollStop, setLastScrollStop] = useState(window.screenTop);

	const getWindowHeight = () => {
		if (lastScrollStop < window.scrollY) setNavbarHidden(true);
		else setNavbarHidden(false);
		setLastScrollStop(window.scrollY);
	};
	window.addEventListener("scroll", getWindowHeight);

	return (
		<div className={`navbar-container ${navbarHidden ? "hidden" : ""}`}>
			<div className='navbar-content'>
				<Link reloadDocument scrollrestoration='true' className='navbar-title' to='/'>
					<h2>Elaborate</h2>
				</Link>
				<div className='navbar-link-container'>
					<Link reloadDocument scrollrestoration='true' className='navbar-link' to='/about'>
						About
					</Link>
					<Link reloadDocument scrollrestoration='true' className='navbar-link' to='/services'>
						Services
					</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link reloadDocument scrollrestoration='true' className='navbar-link' to='/contact'>
						Contact
					</Link>
				</div>
			</div>
			{/* <ButtonLink label='Get Quote' url='/contact' type='primary'></ButtonLink> */}
		</div>
	);
};

export default Navbar;
