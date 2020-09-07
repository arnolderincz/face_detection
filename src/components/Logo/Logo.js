import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css'

const Navigation =() =>{
    return(
       <div className='ma4 mt0'>
           <Tilt className="Tilt" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner"> 👽 </div>
            </Tilt>
       </div>
    );
}

export default Navigation;