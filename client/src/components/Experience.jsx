import React from 'react';

function Experience({image}) {
  let style;

  
  return (
    <span style={style}>
    <div className='container' id='experience'>
      <div className='exCard'>
        {/* <div className='grid-item1a'></div>
        <div className='grid-item2a'></div>
        <div className='grid-item3a'></div> */}
        {image.map((data => (
          
          <div className={`grid-item${data.id}a`} key={data.id}> 
          <div className={`grid-item${data.id} `}>
            <img className = 'expImages' src={data.avatar} />
          </div>
          <h2 className='expHeader' style={{'position': 'relative', 'top':'30px', 'left':'50px'}}>{data.company}</h2>
          <p style={{'position': 'relative', 'top': '50px', 'color': 'white'}} dangerouslySetInnerHTML={{__html: data.description}}></p>
          </div>
        )))}
        
      </div>
    </div>
    </span>
  )
}

export default Experience;