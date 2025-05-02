import React from "react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<div className='relative flex flex-col w-full items-center justify-between bg-stone-200 h-80'>
			<div className='w-full flex justify-around'>
				<div>col 1</div>
				<div className='flex flex-col'>
					<Link to='/about'>About</Link>
					<Link to='/services'>Services</Link>
					<Link to='/protfolio'>Case Studies</Link>
					<Link to='/contact'>Contact</Link>
				</div>
				<div className='flex flex-col'>
					<div className='flex gap-x-8 text-neutral-200'>
						<img
							className='size-8'
							src='src/assets/instagram/01 Static Glyph/03 Black Glyph/Instagram_Glyph_Black.png'
						/>
						<img className='size-8' src='src/assets/linkedIn/in-logo/InBug-Black.png' />
					</div>
				</div>
			</div>
			<p>Blooming, LLC</p>
		</div>
	);
};

export default Footer;
