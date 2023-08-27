import styles from '../../style';
import DataSet from '../molecules/DataSet';
import Hero from '../molecules/Hero';
import Navbar from '../molecules/Navbar';
import SearchSection from '../molecules/SearchSection';

export default function LandingPage() {
  return (
		<section className="w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter} mx-5 sm:mx-0`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
			</div>

            <div className={`hero`}>
                <div className={`${styles.boxWidth}`}>
                    <Hero />
                </div>
            </div>
            <div className={`${styles.paddingX} ${styles.flexStart}`}>
                <div className={`${styles.boxWidth}`}>
                    <DataSet />
                </div>


            </div>
		</section>
	);
}
