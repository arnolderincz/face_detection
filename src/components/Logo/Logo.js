import React from 'react';
import Tilt from 'react-tilt';


const Logo =() =>{
    return(
       <div className='ma4 mt2'>
           <Tilt className="Tilt " options={{ max : 55 }} style={{ height: 120, width: 120 }} >
                <img src="https://drive.google.com/uc?export=view&id=1isOJzhJl5kSt19riK0hpoBQ8ZP448zsj" alt='logo'/>
            </Tilt>
       </div>
    );
}

export default Logo;