import React, {useState} from 'react';
import tw, {styled, css} from 'twin.macro'

import {Shape} from "./shape";


let DrawCanvas = tw.div`
  w-full h-full border border-gray-500 relative
`



let Dg = tw.div`
  absolute border-2 border-gray-400
`


const DragGuide = ({data})=>{
    console.log('data', data)

    let left = Math.min(data.x1, data.x2);
    let top = Math.min(data.y1, data.y2);

    let width = Math.abs(data.x1-data.x2)
    let height = Math.abs(data.y1-data.y2)

    console.log(left,top,width,height)

    return (
        <Dg style={{border:'1px solid black',pointerEvents:'none',left:left+'px',top:top+'px',width:width+'px',height:height+'px'}}></Dg>
    )
}


export const Draw = (props) => {

    let [shapes, setShapes] = useState([]);
    let [activeDragInfo, setActiveDragInfo] = useState(null);

    let handleClick = (evt) => {
        console.log(evt);
    }

    let handleMouseDown = (evt) => {
        console.log("down",evt)
        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY
        setActiveDragInfo({x1:x ,y1:y , x2:x,y2:y})
    }

    let handleMouseUp = (evt) => {
        console.log("up",evt)
        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY

        setActiveDragInfo( Object.assign({},activeDragInfo, {x2:x,y2:y}))

        let left = Math.min(activeDragInfo.x1, activeDragInfo.x2);
        let top = Math.min(activeDragInfo.y1, activeDragInfo.y2);

        let width = Math.abs(activeDragInfo.x1-activeDragInfo.x2)
        let height = Math.abs(activeDragInfo.y1-activeDragInfo.y2)
        
        setShapes([{type:'rect', data: {left, top, width, height} }].concat(shapes))

        setActiveDragInfo(null);
    }

    let handleMouseMove = (evt) => {
        // console.log("move",evt)
        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY

        if(activeDragInfo != null) {
            setActiveDragInfo( Object.assign({},activeDragInfo,  {x2:x,y2:y}))
        }
    }

    return (
        <DrawCanvas onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
            {shapes.map((s,idx)=>{
                return <Shape key={idx} data={s}/>
            })}

            {activeDragInfo && <DragGuide data={activeDragInfo}></DragGuide>}
        </DrawCanvas>
    )
}
