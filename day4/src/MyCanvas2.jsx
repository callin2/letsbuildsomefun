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
    drawPath2Canvas(ctx, `M ${line.x1} ${line.y1} L ${line.x2} ${line.y2}`);
}


function drawCircle2Canvas(ctx, circle) {
    console.log('circle', circle)
    let path2 = new Path2D();

    let r = Math.sqrt((circle.x1-circle.x2)^2 + (circle.y1-circle.y2)^2)

    path2.moveTo(circle.x1, circle.y1);
    path2.arc(circle.x1, circle.y1, r, 0, 2 * Math.PI);

    drawPath2Canvas(ctx, path2);
}

export const MyCanvas2 = (props) => {
    const canvasRef = useRef(null)
    let [activeDragInfo, setActiveDragInfo] = useState(null);

    let handleClick = (evt) => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        console.log(props.activeDrawCtx)

        if(props.activeDrawCtx.tool != 'shape') return;


    }

    let handleMouseDown = (evt) => {
        // console.log("down",evt)

        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY
        setActiveDragInfo({x1:x ,y1:y , x2:x,y2:y})
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
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawLine2Canvas(ctx, activeDragInfo)
                break;

            case 'circle':
                drawCircle2Canvas(ctx, activeDragInfo)
                break;

            default:
        }

        setActiveDragInfo(null);
    }

    let handleMouseMove = (evt) => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')

        let x = evt.nativeEvent.offsetX
        let y = evt.nativeEvent.offsetY

        if(activeDragInfo == null) return;

        setActiveDragInfo( Object.assign({},activeDragInfo,  {x2:x,y2:y}))

        switch(props.activeDrawCtx.shape) {
            case 'line':
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawLine2Canvas(ctx, activeDragInfo)
                break;
            default:
        }
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