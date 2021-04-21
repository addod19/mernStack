import React from 'react';

import '../assets/css/Footer.css';

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';

const Footer = () => {
  return(
    <footer className="footer__links">
      <ul>
        <li>
          <a href="/home">
            <HomeIcon />
          </a>
        </li>
        <li>
          <a href="/search">
            <SearchIcon />
          </a>
        </li>
        <li>
          <a href="/add__post">
            <AddIcon />
          </a>
        </li>
        <li>
          <a href="/favourite">
            <FavoriteBorderIcon />
          </a>
        </li>
        <li>
          <a href="/user__profile">
            <PersonIcon />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer;