import PropTypes from 'prop-types';
const Button = ({ styles, children }) => {
	return (
		<button
			type="submit"
			className={`py-2.5 px-8 bg-blue-gradient font-poppins font-medium text-[18px] text-[#fff] outline-none bg-primary rounded-[5px] ${styles} hover:bg-[#caceca] border w-[100%]`}
		>
			{children}
		</button>
	);
};
Button.propTypes = {
	styles: PropTypes.string,
    children: PropTypes.string,

};

export default Button;
