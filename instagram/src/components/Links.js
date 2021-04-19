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

const Links = () => {
  return(
    <Router>
      <ul>
        <li>
          <Link to="posts">Posts</Link>
        </li>
        <li>
          <Link to="igtv">IGTV</Link>
        </li>
        <li>
          <Link to="saved">Saved</Link>
        </li>
        <li>
          <Link to="/tagged">Tagged</Link>
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