import React from "react";
import { Link } from "react-router";

const Navbar = () => {
	return (
		<div className='flex justify-between items-center pt-16 px-20'>
			<Link className='text-5xl text-neutral-200' to='/'>
				Blooming
			</Link>
			<div className='flex gap-x-8'>
				<div className='flex gap-x-8 *:text-lg *:text-stone-200 *:transition-all *:duration-500 *:focus:underline-offset-6 *:hover:scale-125 *:focus:underline *:focus:decoration-stone-200 *:focus:scale-125'>
					<Link to='/about'>About</Link>
					<Link to='/services'>Services</Link>
					<Link to='/protfolio'>Case Studies</Link>
					<Link to='/contact'>Contact</Link>
				</div>

				<div className='flex gap-x-8 text-neutral-200'>
					<img className='size-8' src='src/assets/instagram/01 Static Glyph/02 White Glyph/Instagram_Glyph_White.png' />
					<img className='size-8' src='src/assets/linkedIn/in-logo/InBug-White.png' />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
