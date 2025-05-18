import React from "react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<div className='relative flex flex-col w-full items-center justify-between bg-stone-50 h-40 pt-5 border-t border-stone-200'>
			<div className='w-full flex justify-around text-stone-400'>
				<div className='flex flex-col items-center justify-between'>
					email
					<p>Blooming, LLC</p>
				</div>

				<div className='flex-col'>
					<div className='flex flex-col'>
						<Link to='/about'>About</Link>
						<Link to='/services'>Services</Link>
						<Link to='/portfolio'>Porfolio</Link>
						<Link to='/contact'>Contact</Link>
					</div>
					<div className='flex flex-col'>
						<div className='flex gap-x-8 text-stone-200'>
							<img
								className='size-6'
								src='src/assets/instagram/01 Static Glyph/03 Black Glyph/Instagram_Glyph_Black.png'
							/>
							<img className='size-6' src='src/assets/linkedIn/in-logo/InBug-Black.png' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
