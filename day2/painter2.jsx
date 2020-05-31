
/** @jsx h */


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
        props.handler({x:o.nativeEvent.offsetX,y:o.nativeEvent.offsetY})
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

function h(nodeName, attributes, ...args) {
    let children = args.length ? [].concat(...args) : null;
    return { nodeName, attributes, children };
}

function render(vnode) {
    if (typeof vnode==='string') return document.createTextNode(vnode);
    let n = document.createElement(vnode.nodeName);
    Object.keys(vnode.attributes || {}).forEach( k => n.setAttribute(k, vnode.attributes[k]) );
    (vnode.children || []).forEach( c => n.appendChild(render(c)) );
    return n;
}

let App = ()=> {
    return (<>
        <Button color={'red'} handler={colorHandler.bind(null,'red')}/>
        <Button color={'green'} handler={colorHandler.bind(null,'green')}/>
        <Palette color={currentColor} />
        <CCanvas handler={dotHandler}>
            {dots.map((d,i)=>{
                return <Dot key={i} cx={d.x} cy={d.y} r={10} color={d.color}/>
            })}
        </CCanvas>
    </>)
}

ReactDOM.render(
    <App />,
    document.querySelector('#painter')
)
