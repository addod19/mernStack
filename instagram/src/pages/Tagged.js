import React from 'react';

import TaggedNgu from '../assets/ngu.png';
import TaggedBarbar from '../assets/barber.png';

import '../assets/css/Tagged.css';

const Tagged = () => {
  return(
    <section className="tagged">
     <div className="tagged_never__give__up">
      <img 
        className="tagged_nvu__img"
        src={TaggedNgu}
        alt="tagged ngu"
       />
     </div>
     <div className="tagged__barbar">
      <img 
        className="tagged_barbar__img"
        src={TaggedBarbar}
        alt="tagged barbar"
       />
     </div>
    </section>
  )
}

export default Tagged;