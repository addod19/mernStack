import './App.css';

import Post from './components/Post';

import HomeIcon from '@material-ui/icons/Home';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import ExploreIcon from '@material-ui/icons/Explore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Avatar from "@material-ui/core/Avatar";

import ProfileAvatar from './assets/kro.jpg';
import SettingsIcon from '@material-ui/icons/Settings';
import Statistics from './components/Statistics';

import Links from './components/Links';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
        className="app__header__logo"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" className="App-logo" alt="logo" />
      
        <div className="app__icons">
          <HomeIcon fontSize="large" className="home__icon" />
          <OfflineBoltIcon fontSize="large" className="message__icon" />
          <ExploreIcon fontSize="large" className="explore__icon" />
          <FavoriteIcon fontSize="large" className="favorite__icon" />
          <Avatar 
            src={ProfileAvatar}
            alt="Profile Avatar"
            className="avatar__icon" />
        </div>
    </div>
    {/* <ProfileDescription /> */}
    <section className="profile__desc">
      <div className="profile__desc__row1">
        {/* Avatar */}
        <img
          src={ProfileAvatar}
          alt="Profile Avatar"
          className="profile__desc__avatar"
        />
        <div className="profile__desc__edit">
          <div className="inner_row">
            <h3>Nana_Kro</h3>
            <SettingsIcon fontSize="large" className="settings" />
          </div>
          <div className="edit__button">
            <a href="#">Edit Profile</a>
          </div>
        </div>
      </div>
      <div className="profile__desc__row2">
          {/* name */}
          <h3 className="name">Nana Addo</h3>
          {/* description */}
          <p className="desc">
            Am a Full Stack Developer with 1 year experience. Currently a Code Reviewer
            @<a href="microverse.org">Microverse</a>
          </p>
          {/* link */}
          <a href="daniellarbiaddo.com" target="__blank">daniellarbiaddo.com</a>
      </div>
    </section>
    <Statistics />
    <Links />
    <Post />
    </div>
  );
}

export default App;
