import React,{useState} from 'react';
import ReactDOM from 'react-dom';

let Button = (props) =>
    <button
        style={{backgroundColor:props.color}}
        onClick={props.handler}>{props.color}
    </button>

let Palette = (props) =>
    <div style={{background:props.color, display:'inline-block', width:'20px',height:'20px'}}>
    </div>

let CCanvas = (props) => {
    let handler = (evt) => {
        let o = evt;
        console.log(o);
        props.handler({
            x: o.nativeEvent.offsetX,
            y: o.nativeEvent.offsetY
        })
    }

    return <div style={{
        width: '300px',
        height: '300px',
        position: 'absolute',
        border: '1px solid black',
        left: '100px',
        top: '100px',
        margin: '10px',
        padding: '15px'
    }} onClick={handler}>
        {props.children}
    </div>
}

let Dot = (props) => <div style={{
    borderRadius: '9999px',
    position: 'absolute',
    left: `${props.cx-props.r}px`,
    top: `${props.cy-props.r}px`,
    width: `${props.r*2}px`,
    height: `${props.r*2}px`,
    border: '1px solid silver',
    backgroundColor: props.color,
}}>

</div>

let App = ()=> {
    let [currentColor,setColor] = useState('red');
    let [dots,setDots] = useState([]);

    let colorHandler = (color) => {
        setColor(color);
    }

    let dotHandler = (evt) => {
        setDots([{x:evt.x,y:evt.y, color:currentColor}].concat(dots))
    }

    let vdom =  (<>
        <Button color={'red'} handler={colorHandler.bind(null,'red')}/>
        <Button color={'green'} handler={colorHandler.bind(null,'green')}/>
        <Palette color={currentColor} />
        <CCanvas handler={dotHandler}>
            {dots.map((d,i)=>{
                return <Dot key={i} cx={d.x} cy={d.y} r={10} color={d.color}/>
            })}
        </CCanvas>
    </>)

    console.dir(vdom)

    return vdom;
}

ReactDOM.render(
    <App />,
    document.querySelector('#painter')
)
