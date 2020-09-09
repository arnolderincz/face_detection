import React from 'react';

const Navigation =({onRouteChange}) =>{
    return(
        <nav style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick={() => onRouteChange('signIn') } className='f4 link dim black pointer mr3'>Sign out</p>
        </nav>
    );
}

export default Navigation;