import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ loggedIn, setUser }) => {

  if (loggedIn) {
    return (
      <header>
        <nav className='loggedin navbar sticky-top navbar-expand-lg navbar-dark bg-dark'>
          <Link className='logo navbar-brand' to='/'>HashCode</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <span className="clickable nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{loggedIn.username}</span>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className='profile-title dropdown-item' to={`/profile/${loggedIn.user_id}`}>Profile</Link>
                  <div className="dropdown-divider"></div>
                  <span className="clickable dropdown-item" onClick={() => setUser()} >Log Out</span>
                </div>
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