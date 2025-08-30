import React from "react";
import { Link } from "react-router";
import ButtonLink from "../../components/ButtonLink";

const Navbar = () => {
	return (
		<div className='sticky top-0 w-full flex items-center bg-blue-900 z-50 shadow-sm px-80'>
			<div className='flex justify-start gap-x-4 items-end sticky top-0 py-3 px-20 w-full'>
				<Link className='text-4xl text-white font-bold' to='/'>
					Simply
				</Link>
				<div className='flex gap-x-4 *:text-md *:font-semibold text-white *:hover:text-blue-300 *:transition-all *:duration-300 *:focus:underline-offset-6 *:focus:underline *:focus:decoration-stone-900'>
					<Link to='/about'>About</Link>
					<Link to='/services'>Services</Link>
					{/* <Link to='/portfolio'>Case Studies</Link> */}
					<Link to='/contact'>Contact</Link>
				</div>
			</div>
			<ButtonLink label='Get Quote' url='/contact' type='primary'></ButtonLink>
		</div>
	);
};

export default Navbar;
