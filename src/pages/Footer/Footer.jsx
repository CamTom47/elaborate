import { Link } from "react-router";
import "../../styles/components/Footer.scss";

const Footer = () => {
	return (
		<div className='footer-container'>
			<div className='footer-content'>
				<div className='contact-information'>
					<p className='font-semibold text-xl'>Simply, LLC</p>
					<p>hello@simply.com</p>
					<img src='src/assets/linkedIn/in-logo/InBug-White.png' />
				</div>
				<div className='link-container'>
						<Link className="footer-link" to='/about'>About</Link>
						<Link className="footer-link" to='/services'>Services</Link>
						<Link className="footer-link" to='/contact'>Contact</Link>
				</div>
			</div>
		</div>
	);
};

export default Footer;
