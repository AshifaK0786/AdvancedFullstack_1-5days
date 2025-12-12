import React from 'react';
import ChildComponent from './ChildComponent';
const ParentComponent = () => {
    return (
        <div>
            <ChildComponent data={{name: 'John', age: 25, address: {city: 'New York', state: 'NY'}, hobbies:['reading','coding'] }}/>
            <h1>This is the Parent Component</h1>
        </div>
    )
}   
export default ParentComponent;