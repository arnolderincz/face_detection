import React from 'react';

const Home = ({onRouteChange}) =>{
    return(
        <div  style={{display:'flex', justifyContent:'flex-end'}}>
            <p onClick = {() => onRouteChange('signedOut')} className='f4 link dim black pointer mr3' >Home</p>
        </div>
    )
}

export default Home;