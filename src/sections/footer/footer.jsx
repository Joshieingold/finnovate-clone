import Logo from "../../assets/logo.png";
import "./footer.css";
function Footer() {
    return (
        <section className="footer">
            <div className="footer-wrapper">
                <div className="footer-content-left">
                    <div>
                        <img src={Logo} className="footer-logo" />
                    </div>
                    <p>We build at the scale of your ambition.</p>
                    <div>
                        <button>Work with us →</button>
                    </div>
                    <p className="copyright">
                        © Exacto Systems Inc. 2026. All Rights Reserved.
                    </p>
                </div>
                <div className="footer-links">
                    <div className="footer-link-container">
                        <p>Services</p>
                        <div className="footer-link-wrapper">
                            <a>AI enablement</a>
                            <a>Digital Product development</a>
                            <a>UI/UX design</a>
                            <a>Fincharm platform</a>
                            <a>Agile methodology</a>
                        </div>
                    </div>
                    <div className="footer-link-container">
                        <p>Clients</p>
                        <div className="footer-link-wrapper">
                            <a>Wealth management</a>
                            <a>Lending</a>
                            <a>Payment & e-commerce</a>
                            <a>Educaton</a>
                            <a>Startups</a>
                            <a>Non-profits</a>
                        </div>
                    </div>
                    <div className="footer-link-container">
                        <p>Company</p>
                        <div className="footer-link-wrapper">
                            <a>Team</a>
                            <a>Blog</a>
                        </div>
                    </div>
                    <div className="footer-link-container">
                        <p>Contact us</p>
                        <div className="footer-link-wrapper">
                            <a>hello@finnovate.io</a>
                            <a>+1 888-702-FINN</a>
                        </div>
                        <a>
                            <img />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;
