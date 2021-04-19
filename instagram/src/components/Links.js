import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Posts from '../pages/Posts';
import IGTV from '../pages/IGTV';
import Tagged from '../pages/Tagged';
import Saved from '../pages/Saved';

import '../assets/css/Links.css';

// import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PostAddIcon from '@material-ui/icons/PostAdd';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

const Links = () => {
  return(
    <Router>
      <ul className="app__links">
        <li className="app__links__posts">
          <Link to="posts" className="app__links_posts_link">
            <PostAddIcon />
          </Link>
        </li>
        <li className="app__links__igtv">
          <Link to="igtv" className="app__links_igtv_link">
            <LiveTvIcon />
          </Link>
        </li>
        <li className="app__links__saved">
          <Link to="saved" className="app__links_saved_link">
            <BookmarkBorderIcon fontSize="large" />
          </Link>
        </li>
        <li className="app__links__tagged">
          <Link to="/tagged" className="app__links_tagged_link">
            <PersonOutlineIcon />
          </Link>
        </li>
      </ul>
      
      <Switch>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/igtv">
          <IGTV />
        </Route>
        <Route path="/saved">
          <Saved />
        </Route>
        <Route path="/tagged">
          <Tagged />
        </Route>
      </Switch>
      
      
    </Router>
  )
}

export default Links;