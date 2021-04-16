import React from 'react';
import '../assets/css/Footer.css';

import MusicNoteIcon from '@material-ui/icons/MusicNote';

import Ticker from 'react-ticker';

const VideoFooter = () => {
  return(
    <div className="videoFooter">
      <div className="video__footer_text">
        <h3>@nanakwame</h3>
        <p>This is my first day outside the womb</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />
          <Ticker mode="smooth">
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
    </div>
  )
}

export default VideoFooter;