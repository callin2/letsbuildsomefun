import React, {useRef, useState, useEffect} from 'react';



function drawPath2Canvas(ctx, path="m 0 0 l 10 10 a 6 6 0 1 0 1 1 l 19 19") {
    let p = new Path2D(path);
    ctx.save()
    ctx.strokeStyle = 'red';
    ctx.stroke(p);
    ctx.restore()
}



function drawLine2Canvas(ctx, line) {
    drawPath2Canvas(ctx, `M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`);
}

function drawShape(ctx, aShape) {
    switch(aShape.shape) {
        case 'line':
            drawLine2Canvas(ctx, aShape);
            break;

    }
}


//===============================================================

export const MyCanvas = (props) => {

    const canvasRefFront = useRef(null)
    const canvasRef = useRef(null)
    let [shapes, setShapes] = useState(props.shapes);
    let [activeDragInfo, setActiveDragInfo] = useState(null);

    // event handler begin ----------

    let handleMouseDown = (evt) => {
        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY
        setActiveDragInfo({x1:x ,y1:y , x2:x,y2:y})
    }

    let handleMouseUp = (evt) => {
        const canvas = canvasRefFront.current
        const ctx = canvas.getContext('2d')

        switch(props.activeDrawCtx.shape) {
            case 'rect':
                drawRect2Canvas(ctx, {
                    x: Math.min(activeDragInfo.x1,activeDragInfo.x2),
                    y: Math.min(activeDragInfo.y1,activeDragInfo.y2),
                    width: Math.abs(activeDragInfo.x2 - activeDragInfo.x1),
                    height: Math.abs(activeDragInfo.y2 - activeDragInfo.y1),
                    fillColor: 'orange',
                    strokeColor:'black'})
                break;


            case 'line':
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // drawLine2Canvas(ctx, activeDragInfo)
                setShapes([{shape:'line', ...activeDragInfo}].concat(shapes))
                break;

            case 'circle':
                drawCircle2Canvas(ctx, activeDragInfo)
                break;

            default:
        }

        setActiveDragInfo(null);
    }

    let handleMouseMove = (evt) => {
        const canvas = canvasRefFront.current
        const ctx = canvas.getContext('2d')

        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY

        if(activeDragInfo == null) return;

        setActiveDragInfo( Object.assign({},activeDragInfo,  {x2:x,y2:y}))

        switch(props.activeDrawCtx.shape) {
            case 'line':
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawLine2Canvas(ctx, activeDragInfo)
                // setShapes([].concat(shapes))

                break;
            default:
        }
    }

    // event handler end ----------

    useEffect(()=>{
        console.log('effect')
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        shapes.forEach(s=>{
            drawShape(ctx, s);
        })
    },[shapes])

    useEffect(()=>{
        const canvas = canvasRef.current
        const canvasFront = canvasRefFront.current
        const ctx = canvas.getContext('2d')

        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        canvas.width = 1014;
        canvas.height = 1509;
        canvasFront.width = 1014;
        canvasFront.height = 1509;
    }, [])



    return (

            <div style={{position:'relative', height: '100%', width:'100%'}}>
                <canvas
                    ref={canvasRef}
                    style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}}></canvas>
                <canvas
                    onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}
                    ref={canvasRefFront}
                    style={{position:'absolute', top:0, left:0,  width:'100%', height:'100%'}}></canvas>
            </div>




    )
}