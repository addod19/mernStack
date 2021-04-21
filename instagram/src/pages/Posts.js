import React from 'react';

import PostNgu from '../assets/ngu.png';
import PostBarbar from '../assets/barber.png';
import PostYm from '../assets/ym.png';
import PostPatrik from '../assets/patrik.png';
import PostCoconut from '../assets/coconut.png';
import PostProf from '../assets/prof.png';

import '../assets/css/Posts.css';

const Posts = () => {
  return(
    <section className="posts">
     <div className="post_never__give__up">
      <img 
        className="post_nvu__img"
        src={PostNgu}
        alt="post ngu"
       />
     </div>
     <div className="post__barbar">
      <img 
        className="post_barbar__img"
        src={PostBarbar}
        alt="post barbar"
       />
     </div>
     <div className="post_ym">
      <img 
        className="post_ym__img"
        src={PostYm}
        alt="post ym"
      />
     </div>
     <div className="post_patrik">
      <img 
        className="post_patrik__img"
        src={PostPatrik}
        alt="post patrik"
       />
     </div>
     <div className="post_coconut">
     <img 
        className="post_coconut__img"
        src={PostCoconut}
        alt="post coconut"
       />
     </div>
     <div className="post_prof">
       <img 
        className="post_prof_image"
        src={PostProf}
        alt="post prof"
       />
     </div>
    </section>
  )
}

export default Posts;