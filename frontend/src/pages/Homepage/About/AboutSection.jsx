import ButtonLink from "../../../components/ButtonLink";

const AboutSection = () => {
	return (
		<div className='h-(--content) flex flex-col w-full items-center'>
			<div className='relative flex flex-col h-full gap-y-12 justify-center items-center px-4  md:py-60 md:w-full md:px-30 lg:px-40 lg:py-36 xl:px-80 xl:py-68 2xl:py-84 2xl:px-120'>
				<div className='absolute bg-[url(/art/frameworks-development-stair-frames-3-peach.png)] bg-size-[auto_120px] bg-no-repeat bg-origin-border bg-bottom-left p-16 right-0 bottom-0 scale-x-[-1] md:p-24 md:bg-size-[auto_160px]'></div>
				<h2 className={`text-wrap text-3xl text-primary font-black text-center`}>
					Software Engineering Solutions For Your Unique Problems
				</h2>
				<div className='flex flex-col gap-y-12 justify-center items-center'>
					<p className='w-fit text-center font-normal text-lg'>
						We develop with a customer centric focus. Our number one goal is to ensure your needs are met at all phases
						of the project to successfully deliver the product that you envision.
					</p>
					<div className='flex flex-col w-full text-center gap-y-4 md:flex-row md:justify-center md:gap-x-20'>
						<ButtonLink label='Learn More' url='/about' size='large' type='primary' dark={true} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutSection;
