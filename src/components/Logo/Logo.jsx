import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png'
function Logo() {
  return (
    <div className="ma4 mt0">
        <Tilt className='Tilt br2 shadow-2'>
            <div style={{ width:'100%',height: '100%'}}>
                <div className="Tilt-inner pa3"> 
                    <img style={{paddingTop: '5px'}} src={brain} alt="logo"/>
                </div>
            </div>
        </Tilt>
    </div> 
  )
}

export default Logo