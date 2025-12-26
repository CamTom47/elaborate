import { Link } from "react-router";
import frameworksLogo from "../assets/content/frameworks-development-logo-cream.png";

const Footer = () => {
	return (
		<div className='relative h-100 w-screen grid grid-cols-3 justify-between bg-base *:text-background-primary pt-12 pb-4 px-4 gap-y-8 border-t border-primary-dark lg:gap-y-0 lg:h-60 xl:py-40'>
			<div className='absolute bg-[url(/art/frameworks-development-stair-frames-2-cream.png)] bg-size-[auto_120px] bg-no-repeat bg-origin-border bg-bottom-right p-16 top-0 right-0 scale-x-[-1] rotate-180 md:p-24 md:bg-size-[auto_160px]'></div>

			<div className='flex flex-col items-start justify-end '>
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
			<div className='flex flex-col justify-start items-center gap-y-4'>
				<img src={frameworksLogo} alt='Frameworks Design Logo' className='w-fit size-28' />
				<p className=''>Est. 2025</p>
			</div>
			<div className='flex gap-x-2 justify-end items-end'>
				<div>
					<a
						rel='noopener noreferrer'
						href='https://www.linkedin.com/company/frameworks-development'
						className='flex justify-end m-0 p-0'>
						<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 640' className='size-8'>
							<path
								fill='#f2e0d5'
								d='M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z'
							/>
						</svg>
					</a>
				</div>
				<a href='mailto:hello@frameworksdev.com' className='m-0 p-0'>
					<svg
						className='text-background-primary'
						xmlns='http://www.w3.org/2000/svg'
						width='32'
						height='32'
						viewBox='0 0 24 24'>
						<path
							fill='currentColor'
							d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 1 1 .9-1.44L12 11l6.7-4.19a.85.85 0 1 1 .9 1.44'
						/>
					</svg>
				</a>
			</div>
		</div>
	);
};

export default Footer;
