import React from 'react'
import './Skills.css'
import html from './html.jpeg'
import css from './css.jpeg'
import java from './java.jpeg'
import node  from './node.jpeg'
import Database from './Database.jpeg'
function Skills() {

  return (
    <div>
    <div className='Main-Skills-dev'>

      <div className='Dev-one'>
        <img src={html}alt='description'   className='Html-pic'></img>
<h2 className='html'>Html</h2>
<div className='valuege' ></div>

      </div>
      <div className='Dev-two'>
        <img src={css} alt='description' className='css-pic'></img>
        <h2 className='css'>Css</h2>
        <div className='Valuge-two'></div>

      </div>
      <div  className='Dev-three'>
        <img src={java}alt='describtion' className='java-pics'></img>
        <h2 className='javas'>JavaScript</h2>
        <div className='Valuge-three'></div>


      </div>
      <div className='Dev-four'> 
        <img src={node} alt='describtion' className='node-pics'></img>
        <h2 className='Node-jaz'>Node js </h2>
        <div className='Valuge-Fours'></div>

        
         </div>
      <div  className='Five-dev'>
        <img src={Database} alt='describtion' className='Database-Pic'></img>
        <h2 className='data-bas'>Database</h2>
        <div className='Valuge-Five'></div>

      </div>

</div>
    
    </div>
  )
}

export default Skills