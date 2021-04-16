import React, { useState } from 'react';
import '../assets/css/SideBar.css';

import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import MessageBorderIcon from '@material-ui/icons/MessageBorder';
// import ShareBorderIcon from '@material-ui/icons/ShareBorder';


const VideoSideBar = ({ likes, shares, messages }) => {
  const [liked, setLiked] = useState(false);
  const [shared, setShared] = useState(false);
  const [message, setMessage] = useState(false);

  return(
    <div className="video__side__bar">
      <div className="videoSideBar__butoon">
        {
          liked ? (
            <FavoriteIcon
              fontSize="large"
              onClick={(e) => setLiked(false)}
            />
          ) : (
            <FavoriteBorderIcon 
              fontSize="large"
              onClick={(e) => setLiked(true)}
             />
          )
        }
        <p>{ !liked ? likes : likes + 1 }</p>
      </div>
      <div className="videoSideBar__butoon">
        {
          message ? (
            <MessageIcon
              fontSize="large"
              onClick={(e) => setMessage(false)}
            />
          ) : (
            <MessageIcon 
              fontSize="large"
              onClick={(e) => setMessage(true)}
             />
          )
        }
        <p>{messages}</p>
      </div>
      <div className="videoSideBar__butoon">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSideBar;