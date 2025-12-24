import { Link } from "react-router";
import frameworksLogo from "../assets/content/frameworks-development-logo-cream.png";

const Footer = () => {
	return (
		<div className='relative h-fit w-screen grid grid-cols-3 flex-col justify-between bg-base *:text-background-primary pt-12 pb-4 px-4 gap-y-8 lg:gap-y-0 border-t border-primary-dark'>
			<div className='flex flex-col items-start justify-start'>
				<h2 className='text-lg underline'>Company</h2>
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
			<div className='flex flex-col justify-between items-center gap-y-4'>
				<img src={frameworksLogo} alt='Frameworks Design Logo' className='w-fit h-32' />
				<p className=''>Est. 2025</p>
			</div>
			<div className='flex flex-col gap-x-2 justify-end items-end lg:justify-between'>
				<div>
					<h2 className='text-lg underline'>Find Us On</h2>
					<a
						rel='noopener noreferrer'
						href='https://www.linkedin.com/company/frameworks-development'
						className='flex justify-end m-0 p-0'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' className="size-8">
							<path
								fill='#f2e0d5'
								d='M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z'
							/>
						</svg>
					</a>
				</div>
				<a href='mailto:hello@frameworksdev.com' className='m-0 p-0'>
					hello@frameworksdev.com
				</a>
			</div>
		</div>
	);
};

export default Footer;
