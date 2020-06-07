import React, {useState} from 'react';
import tw, {styled, css} from 'twin.macro'


let DrawCanvas = tw.div`
  w-full h-full border border-gray-500 relative
`

export const Draw = (props) => {
    let [shapes, setShapes] = useState([]);

    let handleClick = (evt) =>{

    }

    let handleMouseDown = (evt) => {

    }

    let handleMouseUp = (evt) => {

    }

    let handleMouseMove = (evt) => {

    }

    return (
        <DrawCanvas onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
            {shapes.map(s=>{
                <Shape id={s}/>
            })}
        </DrawCanvas>
    )
}