import styles from '../../style';
import Navbar from '../molecules/Navbar';

export default function LandingPage() {
  return (
		<section className="w-full overflow-hidden">
			<div className={`${styles.paddingX} ${styles.flexCenter} mx-5 sm:mx-0`}>
                <div className={`${styles.boxWidth}`}>
                    <Navbar />
                </div>
			</div>
		</section>
	);
}
