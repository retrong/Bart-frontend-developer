import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../../index.css';

function Modal({ setOpenModal }) {

    return (
		<div className="modal-background">
			<div className="modal-container">
                <button className=''> X </button>
				<div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
					{capsules.map(
						({
							id,
							type,
							status,
							serial,
							launches,
							last_update,
							land_landings,
							water_landings,
							reuse_count,
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
									<li className="mb-1">{water_landings} water landings</li>
									<li className="mb-1">Reused {reuse_count} times</li>
									{status === 'active' ? (
										<li className="text-emerald-500">Active</li>
									) : (
										<li className="text-rose-500">Retired</li>
									)}
								</ul>

								<p className="mt-5 opacity-75">{last_update}</p>
							</article>
						)
					)}
				</div>
                <div className='modal-footer'>
                    <button onClick={() => { setOpenModal(false); console.log('clicked')}}>Cancel</button>
                </div>
			</div>
		</div>
	);
}

Modal.propTypes = {
	setOpenModal: PropTypes.func,
};

export default Modal