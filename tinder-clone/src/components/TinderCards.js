import React, { useState, useEffect } from 'react';
import '../assets/css/TinderCards.css';

import TinderCard from 'react-tinder-card';
import axios from '../axios';


// import first from '../assets/images/dd1.png';
// import second from '../assets/images/dd2.png';
// import third from '../assets/images/dd3.png';
// import forth from '../assets/images/dd4.png';
// import fifth from '../assets/images/dd5.png';

const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/tinder/cards');

      setPeople(req.data);
    }

    fetchData();
  }, [])

  const swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirection(direction);
  }

  const outOfFrame = (name) => {
    console.log(name + "left the screen")
  }

  const setLastDirection = () => {

  }

  return(
    <div className="tinderCards">
      {people.map(person => {
        return(
          <div className="tinderCards__cardContainer">
            <TinderCard
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div style={ {backgroundImage: `url(${person.url} )`}}
              className="card">
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
            {/* <h1>{person.name}</h1>
            <img src={person.url} alt="first" /> */}
          </div>
        ) 
      })}
    </div>
  )
}

export default TinderCards;