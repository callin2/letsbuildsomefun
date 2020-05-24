import React from 'react';
import ReactDOM from 'react-dom';
export function Hello(props) {
    return (
    <div>hello {props.name}</div>
    )
}


ReactDOM.render(
    <Hello name="jack"/>,
    document.getElementById('app')
) 
