import React, { useRef, useState } from 'react';
import '../assets/css/Videos.css';

import one from '../assets/videos/one.mp4';

const Video = () => {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }
  return(
    <div className="video">
      <video
      controls
      onClick={handleVideoPress}
      className="video__player"
      loop
      src={one}>
      {/* ref={videoRef} */}
      {/* key={Math.random() * 100} */}
      </video>
      {/* VideoFooter */}
      {/* VideoSideBar */}
    </div>
  )
}

export default Video;