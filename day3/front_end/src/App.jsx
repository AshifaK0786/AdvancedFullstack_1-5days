import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import AddUser from './AddUser'
import GetUsers from './GetUsers'
import About from './About'
import Contact from './Contact'
import Nav from './Nav'
import './styles/nav.css'
import Register from './Register'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Nav/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/adduser' element={<AddUser/>}/>
          <Route path='/getusers' element={<GetUsers/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
