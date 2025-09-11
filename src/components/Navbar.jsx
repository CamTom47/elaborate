import React from "react";
import { Link } from "react-router";
import ButtonLink from "./ButtonLink";
import '../styles/components/Navbar.scss'

const Navbar = () => {
	return (
		<div className='navbar-container'>
			<div className='navbar-content'>
				<Link className='navbar-title' to='/'>
					Simply
				</Link>
				<div className='navbar-link-container'>
					<Link className="navbar-link" to='/about'>About</Link>
					<Link className="navbar-link" to='/services'>Services</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link className="navbar-link" to='/contact'>Contact</Link>
				</div>
			</div>
			<ButtonLink label='Get Quote' url='/contact' type='primary'></ButtonLink>
		</div>
	);
};

export default Navbar;
