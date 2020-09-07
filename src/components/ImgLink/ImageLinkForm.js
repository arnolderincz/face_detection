import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
    return(
        <div className='f3'>
            <p>
                {'I will detect the faces in your pictures. Try me!'}
            </p>
            <div className='center'>
                <div className='pa4 br2 form center shadow-5'>
                    <input className='f5 pa2 w-70 center' type='text'/>
                    <button className='f5 br2 link pv2 w-30 dib pointer white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm;