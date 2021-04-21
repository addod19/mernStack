import React from 'react';

import '../assets/css/IGTV.css';

import IGTVNgu from '../assets/ngu.png';
import IGTVBarbar from '../assets/barber.png';
import IGTVYm from '../assets/ym.png';
import IGTVPatrik from '../assets/patrik.png';
import IGTVCoconut from '../assets/coconut.png';
import IGTVProf from '../assets/prof.png';


const IGTV = () => {
  return(
    <section className="igtv">
     <div className="igtv_never__give__up">
      <img 
        className="igtv_nvu__img"
        src={IGTVNgu}
        alt="post ngu"
       />
     </div>
     <div className="igtv__barbar">
      <img 
        className="igtv_barbar__img"
        src={IGTVBarbar}
        alt="post barbar"
       />
     </div>
     <div className="igtv_ym">
      <img 
        className="igtv_ym__img"
        src={IGTVYm}
        alt="post ym"
      />
     </div>
     <div className="igtv_patrik">
      <img 
        className="igtv_patrik__img"
        src={IGTVPatrik}
        alt="post patrik"
       />
     </div>
     <div className="igtv_coconut">
     <img 
        className="igtv_coconut__img"
        src={IGTVCoconut}
        alt="post coconut"
       />
     </div>
     <div className="igtv_prof">
       <img 
        className="igtv_prof_image"
        src={IGTVProf}
        alt="post prof"
       />
     </div>
    </section>
  )
}

export default IGTV;