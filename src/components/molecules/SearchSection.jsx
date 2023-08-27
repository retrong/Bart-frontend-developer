import PropTypes from 'prop-types';
import React from 'react';
import styles from '../../style';
import Button from './Button';


export default function SearchSection() {
  return (
		<section
			className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
		>
			<div className="flex xs:flex-row items-center search-area flex-col">
				<h2 className={`${styles.heading2} mr-7 text-primary text-center xs:w-full mb-3 xs:mb-0`}>Search Here</h2>
				<input type="search" placeholder="Search Capsule" className="mr-7"/>
			</div>
			<div className="sm:w-auto w-full mt-5 sm:mt-0">
				<Button type="submit" className="">
					Search Here
				</Button>
			</div>
		</section>
	);
}

SearchSection.propTypes = {
	handleChange: PropTypes.func,
};
