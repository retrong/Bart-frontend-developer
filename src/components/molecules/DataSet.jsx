import { useEffect, useState } from 'react';
import '../../index.css';
import Modal from './Modal';
import SearchSection from './SearchSection';

export default function Capsules() {
	const [capsules, setCapsules] = useState([]);
	const [openModal, setModalOpen] = useState(false);
    const [searchCapsule, setSearchCapsule] = useState('');
    const [filteredCapsules, setFilteredCapsules] = useState([]);

	useEffect(() => {
		const fetchCapsules = async () => {
			const res = await fetch('https://api.spacexdata.com/v4/capsules');
			const data = await res.json();
			setCapsules(data);
            setFilteredCapsules(data);
		};

		fetchCapsules();
	}, []);

    const handleSearch = e => {
        const searchValue = e.target.value.toLowerCase();
        setSearchCapsule(searchValue);

        const filtered = capsules.filter(capsule => capsule.serial.toLowerCase().includes(searchValue));
        setFilteredCapsules(filtered);
    }

	return (
		<>
            <SearchSection value={searchCapsule} onChange={handleSearch} />
			{!capsules ? (
				<h1 className="text-center text-semibold text-lg mb-10">Loading</h1>
			) : (
				<section className="py-6">
					<h1 className="capsule-heading text-center mb-10">Capsules</h1>

					<div className="max-width grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-5">
						{filteredCapsules.splice(0, 10).map(
								({
									id,
									type,
									status,
									serial,
									launches,
									last_update,
									land_landings,
								}) => (
									<article key={id} className="articles">
										<h2 className="text-xl font-bold mb-5">
											{type},{' '}
											<span className="text-base opacity-75 font-light">
												{serial}
											</span>
										</h2>
										<ul>
											<li className="mb-1">{launches.length} launches</li>
											<li className="mb-1">{land_landings} land landings</li>
											{status === 'active' ? (
												<li className="text-emerald-500">Active</li>
											) : (
												<li className="text-rose-500">Retired</li>
											)}
										</ul>

										<p className="mt-5 opacity-75">{last_update}</p>

										<button
											onClick={() => {
												setModalOpen(true);
											}}
										>
											{' '}
											Learn More{' '}
										</button>
									</article>
								)
							)}
					</div>

					{openModal && <Modal setOpenModal={setModalOpen} />}
				</section>
			)}
		</>
	);
}

// create a modal that will display on click of learn more