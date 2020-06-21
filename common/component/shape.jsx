import React from 'react';




function makeShape(data) {
    switch(data.type) {
        case 'rect':

            let {left,top,width,height} = data.data

            
            return  <div style={{border:'1px solid black', position:'absolute', pointerEvents:'none',left:left+'px',top:top+'px',width:width+'px',height:height+'px'}}></div>
        break;
        default:
            return null;
    }
}



export const Shape = ({data}) => {


    return makeShape(data)
}

