import { Link } from "react-router";
import linkedInLogo from "../assets/linkedIn/in-logo/InBug-Black.png";

const Footer = () => {
	return (
		<div
			className='h-max w-screen flex flex-col justify-between bg-white *:text-primary-dark pt-12 pb-4 px-4 gap-y-8 lg:gap-y-0 border-t border-primary-dark'
			style={{ boxShadow: "0 4px 10px 0" }}>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-y-2 justify-start items-center lg:justify-start'>
					<a
						rel='noopener noreferrer'
						href='https://www.linkedin.com/company/frameworks-development'
						className='size-6 m-0 p-0'>
						<img src={linkedInLogo} alt='Linked In Logo' className='flex justify-center p-0 m-0' />
					</a>
					<a href='mailto:hello@frameworksdev.com' className='m-0 p-0'>
						<svg className='text-black' xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 24 24'>
							<path
								fill='currentColor'
								d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44'
							/>
						</svg>
					</a>
				</div>
				<div className='flex flex-col items-end'>
					<Link className='text-md' reloadDocument scrollrestoration='true' to='/about'>
						About
					</Link>
					<Link className='text-md' reloadDocument scrollrestoration='true' to='/services'>
						Services
					</Link>
					<Link className='text-md' reloadDocument scrollrestoration='true' to='/contact'>
						Contact
					</Link>
				</div>
			</div>
			<div className='flex flex-col items-center text-center pt-1 h-fit border-t border-t-background lg:border-none lg:flex-row lg:justify-center lg:items-start lg:gap-x-4 lg:p-0 lg:pb-4'>
				<p className=''>Frameworks Development, LLC</p>
				<p className=''>Est. 2025</p>
			</div>
		</div>
	);
};

export default Footer;
