import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({imgUrl, box}) =>{
    return(
        <div className='center'>
            <div className="absolute mt2 mb4">
                <img id='inputImg' alt='' src={imgUrl} width='300px' height='auto'/>
                {box.map((region, index) => (
                    <div key = {index} className="boundig_box" 
                        style={{top:region.topRow, right: region.rightCol, bottom: region.bottomRow, left:region.leftCol}}>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FaceRecognition;