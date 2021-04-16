import React from 'react';
import '../assets/css/Footer.css';

import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

import VideoImage from '../assets/images/dd4.png';

const VideoFooter = () => {
  return(
    <div className="videoFooter">
      <div className="video__footer_text">
        <h3>@nanakwame</h3>
        <p>This is my first day outside the womb</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth" className="ticker">
            {
              ({ index }) => (
                <>
                  <p>Singing lullaby!!!</p>
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