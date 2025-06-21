import React from "react";
import { Link } from "react-router";

const Navbar = () => {
	return (
		<div className='sticky top-0 w-full bg-white z-50 shadow-sm'>
			<div className='flex justify-between items-center sticky top-0 py-3 px-20 w-full'>
				<Link className='text-4xl text-sky-950' to='/'>
					Construe
				</Link>
				<div className='flex gap-x-10 *:text-md *:font-semibold text-sky-950 *:hover:text-sky-100 *:transition-all *:duration-300 *:focus:underline-offset-6 *:focus:underline *:focus:decoration-stone-900'>
					<Link to='/services'>Services</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link to='/contact'>Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
