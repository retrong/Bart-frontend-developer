import { useState } from 'react';
import logo from '../../assets/analogue.svg';
import close from '../../assets/cross.svg';
import menu from '../../assets/hamburger.svg';


const Navbar = () => {
        const [toggle, setToggle] = useState(false);

  return (
		<nav className="w-full py-4 flex justify-between items-center navbar">
			<img src={logo} alt="main-logo" className="w-10 h-10 object-contain" />

			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				<li className="nav-li">
					<a href="">Home</a>
				</li>
				<li id="search" className="nav-li">
					<a href="#">Search</a>
				</li>
				<li id="data" className="nav-li mr-0">
					<a href="#">Data</a>
				</li>
			</ul>

			<div className="sm:hidden flex flex-1 justify-end items-center">
				<img
					src={toggle ? close : menu}
					alt="menu"
					className="w-[28px] h-[28px] object-contain"
					onClick={() => setToggle((prev) => !prev)}
				/>

				<div
					className={`${
						toggle ? 'flex' : 'hidden'
					} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
				>
					<ul className="list-none flex flex-col justify-end items-center flex-1 text-white">
						<li className="nav-li-col mb-4">
							<a href="">Home</a>
						</li>
						<li id="search" className="nav-li-col mb-4">
							<a href="#">Search</a>
						</li>
						<li id="data" className="nav-li-col mr-0">
							<a href="#">Data</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}

export default Navbar