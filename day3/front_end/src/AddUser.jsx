import React from 'react'
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';

const AddUser = () => {
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        gender: "",
        phoneNo: "",
        city: "",
    });
    console.log(userDetails);

    const addUserHandler = async (e) => {
        e.preventDefault();
        let gen = await document.getElementsByName("gender");
        let city = await document.getElementsByName("city");
        gen.forEach((inp) => {
            if (inp.checked)    {
                const genVal = inp.value;
                setUserDetails({ ...userDetails, gender: inp.value })
            }
        });
        city.forEach((opt) => {
            if (opt.selected) {
                console.log(opt);
                setUserDetails({ ...userDetails, city: opt.value })
            }
        })
        console.table(userDetails);
        toast.success("User added successfully");
    };

    const resetHandler = () => {
        setUserDetails({
            name: "",
            email: "",
            gender: "",
            phoneNo: "",
            city: "",
        });
        toast.info("Form reset successfully");
    };



    return (
        
        <div>
            <h1>Add user</h1>
            <form action="">
                <fieldset>
                    <label htmlFor="">Name :</label>
                    <input type="text" placeholder="Enter user name " required onChange={(e) => {
                        setUserDetails({ ...userDetails, name: e.target.value })
                    }} /> <br /><br />

                    <label htmlFor="">Email :</label>
                    <input type="email" placeholder="Enter user email" required onChange={(e) => {
                        setUserDetails({ ...userDetails, email: e.target.value })
                    }} /> <br /><br />

                    <label htmlFor="">Gender : </label>
                    <input type="radio" name="gender" value="Male"
                        onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}
                    /><em>Male</em>
                    <input type="radio" name="gender" value="Female"
                        onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}
                    /><em>Female</em>
                    <br /><br />

                    <label htmlFor="">PhoneNo : </label>
                    <input type="tel" placeholder="+91" required onChange={(e) => {
                        setUserDetails({ ...userDetails, phoneNo: e.target.value })
                    }} /> <br /><br />

                    <label htmlFor="">City :</label>
                    <select name="city" onChange={(e) => setUserDetails({ ...userDetails, city: e.target.value })}>
                        <option value="">Select city</option>
                        <option value="chennai">Chennai</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                    </select>

                    <br /><br />

                    <div className="row my-4">
                        <button type="submit" onClick={addUserHandler} className="btn btn-primary">
                            <strong>Add user</strong>
                        </button>
                    </div>
                    <div className="row ">
                        <button type="reset"onclick={resetHandler} className="btn btn-warning">
                            <strong>Reset</strong>
                        </button>
                    </div>

                </fieldset>
            </form>
        </div>
       
    )
}

export default AddUser