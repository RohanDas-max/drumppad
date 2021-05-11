import React, { useState } from 'react';
import {Howler} from 'howler'
import "./App.css"
 const  VolumeBar = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setvalue] = useState(50);


    const handleVolume = () => {
    setvalue(value)
    Howler.volume(value);
    //console.log(value)
       } 
    

    return (
        <div className="menu">
        <p>Default range slider:</p>
        <input type="range" min="1" max="100" value={value} onChange={handleVolume}  />
      </div>
    )
}
export default VolumeBar;