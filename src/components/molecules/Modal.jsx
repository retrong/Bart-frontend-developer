import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import '../../index.css';

function Modal({ setOpenModal }) {

    return (
		<div className="modal-background">
			<div className="modal-container">
                <button className=''> X </button>
				<div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 px-5">
					<h1>test</h1>
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