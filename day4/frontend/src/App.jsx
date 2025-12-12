import React from 'react'
import Home from './Home'
import Nav from './Nav'
import './styles/nav.css'
import Register from './Register'
import ParentComponent from './ParentComponent'
import ClassBasedComponent from './ClassBasedComponent'
const App = () => {
    return (
        <div>
            <Nav />
            <ParentComponent />
            <Register />
            <ClassBasedComponent />
            <Home />
        </div>
    )
}
export default App