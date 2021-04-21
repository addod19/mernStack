import React from 'react';

import '../assets/css/Saved.css';

import SavedBarbar from '../assets/barber.png';


const Saved = () => {
  return(
    <section className="saved">
     <div className="saved__barbar">
      <img 
        className="saved_barbar__img"
        src={SavedBarbar}
        alt="saved barbar"
       />
     </div>
    </section>
  )
}

export default Saved;