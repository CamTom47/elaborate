import React from "react";
import { Link } from "react-router";

const Navbar = () => {
	return (
		<div className='flex justify-between items-end sticky top-0 bg-stone-50 py-6 px-30 w-full border-b border-stone-200 z-100'>
			<Link className='text-4xl text-stone-400 hover:text-stone-800 duration-300' to='/'>
				Blooming
			</Link>
			<div className='flex gap-x-6 *:text-sm text-stone-400 *:hover:text-stone-800 *:transition-all *:duration-300 *:focus:underline-offset-6 *:focus:underline *:focus:decoration-stone-900'>
				<Link to='/about'>About</Link>
				<Link to='/services'>Services</Link>
				<Link to='/portfolio'>Case Studies</Link>
				<Link to='/contact'>Contact</Link>
			</div>
		</div>
	);
};

export default Navbar;
