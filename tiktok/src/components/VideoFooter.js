import React from 'react';
import '../assets/css/Footer.css';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

import VideoImage from '../assets/images/dd4.png';

const VideoFooter = ({ channel, description, song }) => {
  return(
    <div className="videoFooter">
      <div className="video__footer_text">
        <h3>@{channel}</h3>
        <p>{description}</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth" className="ticker">
            {
              ({ index }) => (
                <>
                  <p>{song}</p>
                </>
              )
            }
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record" 
        src={VideoImage}
        alt="video footer record" />
    </div>
  )
}

export default VideoFooter;