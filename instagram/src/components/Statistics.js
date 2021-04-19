import React from 'react';

import '../assets/css/stats.css';

const Statistics = () => {
  return(
    <section className="profile__stats">
      <div className="profile__stats__post">
        {/* number */}
        <h2>6</h2>
        {/* text*/}
        <h3>posts</h3>
      </div>
      <div className="profile__stats__following">
        {/* number */}
        <h2>60</h2>
        {/* text*/}
        <h3>Following</h3>
      </div>
      <div className="profile__stats__followers">
        {/* number */}
        <h2>66</h2>
        {/* text*/}
        <h3>Followers</h3>
      </div>
    </section>
  )
}

export default Statistics;