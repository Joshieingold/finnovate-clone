import "./navbar.css";
import logo from "../../assets/logo.png";
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <div className="navbar-logo-container">
                    <img className="navbar-logo" src={logo} />
                </div>
            </div>
            <div className="navbar-content">
                <div className="navbar-link-container">
                    <a>Services</a>
                    <a>Clients</a>
                    <a>About</a>
                    <a>Blog</a>
                </div>
                <div>
                    <button>Let's Talk</button>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
