import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedIn }) => {

  if (loggedIn) {
    return (
      <header>
        <nav className='loggedin navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
          <Link className='logo navbar-brand' to='/'>HashCode</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className='profile-title nav-link' to={`/profile/${loggedIn.user_id}`}>{loggedIn.username}</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  } else {
    return (
      <header>
        <nav className='navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
          <Link className='navbar-brand' to='/'>HashCode</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className='nav-item'>
                <Link className='nav-link' to='/signin'>SignIn</Link>
              </li>
              <li className="nav-item active">
                <Link className='nav-link' to='/signup'>SignUp</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;