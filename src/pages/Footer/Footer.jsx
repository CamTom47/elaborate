import React from "react";
import { Link } from "react-router";

const Footer = () => {
	return (
		<div className='relative flex flex-col w-full items-center justify-between bg-linear-to-r from-blue-600 from-10% via-blue-500 via-50% to-blue-600 to-90% h-40 pt-5'>
			<div className='w-full flex justify-around text-white'>
				<div className='flex flex-col items-center justify-between'>
					email
					<p>Construe, LLC</p>
				</div>

				<div className='flex-col'>
					<div className='flex flex-col'>
						<Link to='/about'>About</Link>
						<Link to='/services'>Services</Link>
						{/* <Link to='/portfolio'>Porfolio</Link> */}
						<Link to='/contact'>Contact</Link>
					</div>
					<div className='flex flex-col'>
						<div className='flex gap-x-8 text-stone-200'>
							<img className='size-6' src='src/assets/linkedIn/in-logo/InBug-White.png' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
