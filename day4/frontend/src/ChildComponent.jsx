import React from 'react';
import ParentComponent from './ParentComponent';
const ChildComponent = (props) => {
    return (
        <div>
            <h3>ParentData: {props.data.name}</h3>
            <h4>Age: {props.data.age}</h4>
            <h2>This is the Child Component</h2>
        </div>
    )
}                       
export default ChildComponent;