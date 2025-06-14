import React from "react";
import { Link } from "react-router";

const Navbar = () => {
	return (
		<div className='sticky top-0 w-full z-10 bg-stone-900 z-50'>
			<div className='flex justify-between items-end sticky top-0 py-2 px-20 w-full'>
				<Link className='text-4xl text-sky-400' to='/'>
					Construe
				</Link>
				<div className='flex gap-x-10 *:text-sm *:font-semibold text-sky-400 *:hover:text-sky-100 *:transition-all *:duration-300 *:focus:underline-offset-6 *:focus:underline *:focus:decoration-stone-900'>
					<Link to='/about'>About</Link>
					<Link to='/services'>Services</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link to='/contact'>Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
