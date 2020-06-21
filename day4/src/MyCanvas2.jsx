import React, {useRef, useState} from 'react';

function drawRect2Canvas(ctx, rect) {
    ctx.save()
    ctx.fillStyle = rect.fillColor;
    ctx.strokeStyle = rect.strokeColor;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height)
    ctx.restore()
}

function drawPath2Canvas(ctx, path="m 0 0 l 10 10 a 6 6 0 1 0 1 1 l 19 19") {
    let p = new Path2D(path);
    ctx.save()
    ctx.strokeStyle = 'red';
    ctx.stroke(p);
    ctx.restore()
}


function drawLine2Canvas(ctx, line) {
    console.log('line', line)
    drawPath2Canvas(ctx, `M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`);
}

function drawCircle2Canvas(ctx, rect) {
    ctx.save()
    ctx.fillStyle = rect.fillColor;
    ctx.strokeStyle = rect.strokeColor;
    ctx.fillRect(rect.x, rect.y, rect.width, rect.height)
    ctx.strokeRect(rect.x, rect.y, rect.width, rect.height)
    ctx.restore()
}


export const MyCanvas2 = (props) => {
    const canvasRef = useRef(null)
    let [activeDragInfo, setActiveDragInfo] = useState(null);

    let handleClick = (evt) => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        console.log(props.activeDrawCtx)

        if(props.activeDrawCtx.tool != 'shape') return;

        switch(props.activeDrawCtx.shape) {
            case 'rect':
                drawRect2Canvas(ctx, {
                    x: evt.nativeEvent.offsetX,
                    y: evt.nativeEvent.offsetY,
                    width: 100,
                    height: 60,
                    fillColor: 'orange',
                    strokeColor:'black'})
                break;

            case 'path':
                drawPath2Canvas(ctx, `m ${evt.nativeEvent.offsetX} ${evt.nativeEvent.offsetY} l 10 10 a 6 6 0 1 0 1 1 l 19 19`);

            case 'line':



            default:
        }


    }

    let handleMouseDown = (evt) => {
        // console.log("down",evt)

        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY
        setActiveDragInfo({x1:x ,y1:y , x2:x,y2:y})

        // switch(props.activeDrawCtx.shape) {
        //     case 'rect':
        //         let x = evt.nativeEvent.offsetX
        //         let y = evt.nativeEvent.offsetY
        //         setActiveDragInfo({x1:x ,y1:y , x2:x,y2:y})
        //         break;
        //     default:
        // }


    }

    let handleMouseUp = (evt) => {
        const canvas = canvasRef.current
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
                drawLine2Canvas(ctx, activeDragInfo)

            default:
        }
    }

    let handleMouseMove = (evt) => {
        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY

        if(activeDragInfo == null) return;

        setActiveDragInfo( Object.assign({},activeDragInfo,  {x2:x,y2:y}))

        // switch(props.activeDrawCtx.shape) {
        //     case 'rect':
        //
        //         break;
        //     default:
        // }
    }

    return (
        <canvas onClick={handleClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}
            ref={canvasRef}
                width={604}
                height={900}
                style={{width:'604px'}}
            ></canvas>
    )
}