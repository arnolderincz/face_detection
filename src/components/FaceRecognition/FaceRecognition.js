import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) =>{
    return(
        <div className='center'>
            <div className="absolute mt2 mb4">
                <img id='inputImg' alt='' src={imgUrl} width='300px' height='auto'/>
                <div className="boundig_box" style={{top:box.topRow, right: box.rightCol, bottom: box.bottomRow, left:box.leftCol}}></div>
            </div>
        </div>
    )
}

export default FaceRecognition;