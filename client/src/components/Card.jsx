import React from 'react';

// the issue with the map function was that the arrow function executed was wrapping the jsx element with "{}" instead of "()". You can try replacing that.

function Card({info}) {
 
  return (
    <div className='cardConatiner'>
    <h1 className='skillsHd'>Skills</h1>
        {info && info.map((data, index) => (
          <div className="Card" key={index}>
            <h2>{data.skill}</h2>
            <p>{data.skillset}</p>
          </div>
        ))}
    </div>
  )
}

export default Card;