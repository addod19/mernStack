import React, { useState, useEffect } from 'react';
import '../assets/css/TinderCards.css';

import TinderCard from 'react-tinder-card';
import axios from '../axios';


const TinderCards = () => {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const req = await axios.get('/tinder/cards');
      console.log(req);
      setPeople(req.data);
    }

    fetchData();
  }, [])

  console.log(people);
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
          </div>
        ) 
      })}
    </div>
  )
}

export default TinderCards;