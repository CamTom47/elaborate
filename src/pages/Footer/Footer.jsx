import React from "react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<div className='relative flex flex-col w-full items-center justify-between bg-linear-to-r from-blue-600 from-10% via-blue-500 via-50% to-blue-600 to-90% h-40 pt-5 px-80 border-t border-blue-300'>
			<div className='w-full flex justify-between text-white'>
				<div className='flex flex-col justify-end gap-y-2'>
					<div className='flex '>
						<p className='font-semibold text-xl'>Simply, LLC</p>
					</div>
					<p>hello@simply.com</p>
					<img className='size-6' src='src/assets/linkedIn/in-logo/InBug-White.png' />
				</div>
				<div className='flex items-end gap-x-6'>
					<div className='flex flex-col'>
						<Link to='/about'>About</Link>
						<Link to='/services'>Services</Link>
						{/* <Link to='/portfolio'>Porfolio</Link> */}
						<Link to='/contact'>Contact</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
