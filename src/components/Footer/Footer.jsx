import './footer.css';
import Logo from '../../assets/logo.webp';
const Footer = ()=>{
    return(
        <footer className="footer">
            <div className="footer__container">
                <div>
                    <div className="footer-logo-container">
                        <img src={Logo} alt="Logo" className="footer-logo" /> ManageWise
                    </div>
                    <div className="footer-nav">
                        <ul>
                            <li>Features</li>
                            <li>FAQ</li>
                            <li>Pricing</li>
                            <li>Testimonials</li>
                        </ul>

                    </div>
                </div>
                
                <div className="footer__container__info">
                    <div>
                        © 2022 ManageWise, Inc
                    </div>
                    <div>
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                    </div>
                    
                </div>
            </div>
        </footer>
    )
}
export default Footer;