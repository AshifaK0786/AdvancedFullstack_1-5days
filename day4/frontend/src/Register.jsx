import React from 'react';
import { useState } from 'react';
import './styles/register.css';
function Register() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");  

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(name,email,password);
    }

  return (
    <div>  
        <h2>Register Page</h2>
        <fieldset>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder='enter name' onChange={e} /><br /><br />
            <label htmlFor="email">Email:</label>

            <input type="email" id="email" name="email" /><br /><br />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" /><br /><br />
            <button type="submit">Register</button><br />
            <button type="reset">Reset</button><br />
        </fieldset>
    </div>
  );
}
export default Register;