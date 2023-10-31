import React, { useState } from 'react'
import growth from '../images/growth.png'
import { Link, useNavigate } from "react-router-dom";



function Signup() {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        firstname: "", lastname: "", email: "", phone: "", work: "", password: "", Cpassword: ""

    })
    let name, value;

    const handleInputs = (e) => {
        // console.log(e)

        name = e.target.name
        value = e.target.value

        setUser({ ...user, [name]: value })
        // console.log(name, value)
    }

    const PostData = async (e) => {
        e.preventDefault();
        // console.log(user)
        const { firstname, lastname, email, phone, work, password, Cpassword } = user
        // const res = await fetch("http://localhost:8000/register", {


        const res = await fetch("/register", {

            method: "POST",
            body: JSON.stringify({
                firstname, lastname, email, phone, work, password, Cpassword

            }),
            headers: {
                "Content-Type": "application/json"

            }

        })





        // console.log(res);

        const data = await res.json()

        console.log(data)

        if (res.status === 422 || !data) {
            window.alert("Invalid Registration")
            console.log("Invalid Registration")
        }
        else if (res.status === 401) {
            window.alert("Password not matching")
            console.log("Password not matching")
        }
        else if (res.status === 409) {
            window.alert("Email alreay exist")
            console.log("Email already exist")
        }
        else {
            window.alert(" Registration successfull")
            console.log("Registration successfull")
            navigate("/signin")
        }


    }


    return (
        <>
            <div className='center'>
                <div class="container-fluid main-header" >

                    <div class="row">


                        <div class="col-md-6 col-12 mx-auto">
                            <div class="row">
                                <h1 className='text-center textstyle' > Registration</h1>

                                {/* <!-- left side div --> */}


                                <div class="col-md-6 col-12 main_header_left">
                                    <form onSubmit={PostData} className='register-form' id='register-form'>
                                        <div class="mb-3">
                                            <div class="row">
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="First name" name="firstname" value={user.firstname} onChange={handleInputs} aria-label="First name" />
                                                </div>
                                                <div class="col">
                                                    <input type="text" class="form-control" placeholder="Last name" name="lastname" value={user.lastname} onChange={handleInputs} aria-label="Last name" />
                                                </div>

                                                {/* <div class="col">
                                                    <input type="text" class="form-control" placeholder="Enter your age " name="age" aria-label="age" />
                                                </div> */}
                                            </div>
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputEmail1" class="form-label"></label>
                                            <input type="email" class="form-control" placeholder="Email address" name="email" value={user.email} onChange={handleInputs} id="exampleInputEmail1"
                                                aria-describedby="emailHelp" />
                                            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                        </div>

                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label"></label>
                                            <input type="number" class="form-control" placeholder="Phone" value={user.phone} onChange={handleInputs} name="phone" id="exampleInputPassword1" />
                                        </div>



                                        {/* <!-- radio button --> */}


                                        {/* <div class="form-check">
                                            <input class="form-check-input" type="radio" value="male" id="flexRadioDefault1" name="gender" checked />
                                            <label class="form-check-label" for="flexRadioDefault1">
                                                <span> Male</span>
                                            </label>
                                        </div> <span></span>

                                        <div class="form-check">
                                            <input class="form-check-input" type="radio" value="female" id="flexRadioDefault2" name="gender" />
                                            <label class="form-check-label" for="flexRadioDefault2">
                                                <span> Female</span>

                                            </label>
                                        </div> */}

                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label"></label>
                                            <input type="text" class="form-control" placeholder="Work" id="exampleInputPassword1" value={user.work} onChange={handleInputs} name="work" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label"></label>
                                            <input type="password" class="form-control" placeholder="Password" id="exampleInputPassword1" value={user.password} onChange={handleInputs} name="password" />
                                        </div>

                                        <div class="mb-3">
                                            <label for="exampleInputPassword1" class="form-label"></label>
                                            <input type="password" class="form-control" placeholder=" Confirm Password" id="exampleInputPassword1" value={user.Cpassword} onChange={handleInputs} name="Cpassword" />
                                        </div>




                                        <button type="submit" class="btn btn-primary" >Submit</button>

                                        <Link to="/signin" className='llink'>Sign in</Link>



                                    </form>
                                </div>
                                {/* <!-- right side div --> */}
                                <div class="col-md-6 col-12 main_header_right align-items-center">
                                    <figure>

                                        <img src={growth} class="img-fluid" alt="" />

                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup