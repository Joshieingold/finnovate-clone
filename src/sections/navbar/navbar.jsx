import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-container">
                <Link to="/" className="navbar-logo-container">
                    <img className="navbar-logo" src={logo} />
                </Link>
            </div>
            <div className="navbar-content">
                <div className="navbar-link-container">
                    <Link to="/services" className="nav-link">
                        Services
                    </Link>
                    <Link to="/clients" className="nav-link">
                        Clients
                    </Link>
                    <Link to="/team" className="nav-link">
                        About
                    </Link>
                    <Link
                        to="https://medium.com/finnovate-io"
                        target="_blank"
                        className="nav-link"
                    >
                        Blog
                    </Link>
                </div>
                <div>
                    <button>Let's Talk</button>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
