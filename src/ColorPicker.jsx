import React, {useState} from 'react';
function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF");
    function handleColorChange(event){
        setColor(event.target.value);
    }
    return(
        <div className='color-picker-container'>
            <h1>Color Picker App</h1>
            <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected Color: {color}</p>
            </div>
            <label>Select your color</label>
            <input type='color' value={color} onChange={handleColorChange}></input>
        </div>
    );
}

export default ColorPicker
