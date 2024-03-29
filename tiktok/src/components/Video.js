import React, { useRef, useState } from 'react';
import '../assets/css/Videos.css';

import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';


const Video = ({ 
  url, channel, description, song, likes, messages, shares }) => {
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
      src={url}>
      {/* ref={videoRef} */}
      {/* key={Math.random() * 100} */}
      </video>
      <VideoFooter 
        channel={channel}
        description={description}
        song={song}
      />
      <VideoSideBar
        likes={likes}
        shares={shares}
        messages={messages}
      />
      {/* VideoSideBar */}
    </div>
  )
}

export default Video;