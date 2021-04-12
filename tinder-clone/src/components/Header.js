import React from 'react';
import '../assets/css/Header.css';

import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

import tinderLogo from '../assets/images/tinder.png';

const Header = () => {
  return(
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon_person" />
      </IconButton>
      <IconButton>
        <img src={tinderLogo}
          className="header__logo"
          alt="" 
        />
      </IconButton>
      <IconButton>
        <ForumIcon />
      </IconButton>
    </div>
  )
}

export default Header;