import React from 'react';

function Experience({image}) {
  return (
    <div className='container' id='experience'>
      <div className='exCard'>
        {image.map((el, index) => (
          <img key={index} className= 'experienceIMG' src={el} alt="picture of some sort" />
        ))}
        <h2 className='' style={{'position': 'relative', 'top':'30px', 'left':'50px'}}>LetsGrowMore</h2>
        <p className='' style={{'position': 'relative', 'top': '50px', 'color': 'white'}}>During my time at LetsGrowMore as an intern,<br/>
         I have developed basics skills in HTML, CSS, and vanilla Javascript<br/>
         I was introduced to Bootsrap and React.
         </p>
      </div>
    </div>
  )
}

export default Experience;