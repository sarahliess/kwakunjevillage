import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="container">
        <nav className="row pt-5">
          <div className="col-sm-3 col-6 text-center">
            <Link to="/home">
              <p className="nav-text">Home</p>
            </Link>
          </div>
          <div className="col-sm-3 col-6 text-center">
            <Link to="/rooms">
              <p>Rooms</p>
            </Link>
          </div>
          <div className="col-sm-3 col-6 text-center">
            <Link to="/events">
              <p>Events</p>
            </Link>
          </div>
          <div className="col-sm-3 col-6 text-center">
            <Link to="/travel">
              <p>Travel</p>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
