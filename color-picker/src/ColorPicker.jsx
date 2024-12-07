import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import copySound from './assets/copyFx.mp3'

function ColorPicker(){
    const [color, setColor] = useState("#a00808");

    function col(event){
        setColor(event.target.value);
    }
    function copy(event){
        // copying
        navigator.clipboard.writeText(event.target.innerText);
        // msg display
        toast("Copied!",{
            className: 'toasty',
            autoClose: 1000,
        });
        // sound FX
        new Audio(copySound).play();
    }

    return(
        <>
            <ToastContainer />
            
            <div className="cont">
                <h1>Color Picker</h1>
                <div onClick={copy} className="col" style={{backgroundColor: color}}>
                    <p>{color}</p>
                </div>
                <input type="color" value={color} onChange={col}/>
            </div>
        </>
    );
}

export default ColorPicker;