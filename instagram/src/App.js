import './App.css';

import Post from './components/Post';

import HomeIcon from '@material-ui/icons/Home';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from "@material-ui/core/Avatar";

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
        className="app__header__logo"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" className="App-logo" alt="logo" />
      
        <div className="app__icons">
          <HomeIcon className="home__icon" />
          <OfflineBoltIcon className="message__icon" />
          <ExploreIcon className="explore__icon" />
          <FavoriteIcon className="favorite__icon" />
          <Avatar className="avatar__icon" />
        </div>
    </div>
    <Post />
    </div>
  );
}

export default App;
