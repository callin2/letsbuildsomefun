import React, {useRef} from 'react';

export const MyCanvas = (props) => {

    const canvasRef = useRef(null)



    return (
        <canvas
            ref={canvasRef}
            style={{width:'100%', height:'100%'}}></canvas>
    )
}