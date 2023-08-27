import styles from '../../style';

const Hero = () => {
  return (
		<section
			className={`flex md:flex-row flex-col ${styles.paddingY}`}
		>
			<div
				className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
			>
				<div className="flex flex-row items-center py-[6px] rounded-[10px] mb-2">
					<p className={`${styles.paragraph}`}>
						<span className="text-white">Images</span> from SpaceX{' '}
						<span className="text-white">Rockets</span> & Capsules
					</p>
				</div>

				<div className="flex flex-row justify-between items-center w-full">
					<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
						The Next <br className="sm:block hidden" />{' '}
						<span className="text-gradient">Generation</span>{' '}
					</h1>
				</div>

				<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
					Space Craft.
				</h1>
				<p className={`${styles.paragraph} max-w-[470px] mt-5`}>
					From publicly available sources, such as information that the
					organization make publicly available online.
				</p>
			</div>
		</section>
	);
}

export default Hero