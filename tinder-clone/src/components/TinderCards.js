import React, { useState } from 'react';
import '../assets/css/TinderCards.css';


// import first from '../assets/images/dd1.png';

const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: 'Daniel Larbi Addo',
      url: 'https://via.placeholder.com/150',
    }
  ]);

  return(
    <div className="tinderCards">
      {people.map(person => {
        <h1>{person.name}</h1>
      })}
    </div>
  )
}

export default TinderCards;