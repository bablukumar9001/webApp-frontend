import React, { useState } from 'react'
import growth from '../images/growth.png'
import { Link, useNavigate } from "react-router-dom";



function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const loginUser = async (e) => {
        e.preventDefalut()

        const res = await fetch("/signin", {

            method: "POST",
            body: JSON.stringify({
                email, password

            }),
            headers: {
                "Content-Type": "application/json"

            }

        })

        const data = res.json()

        if (res.status === 400 || !data) {
            window.alert("Invalid credentials")
            console.log("Invalid credentials")
        }
        else {
            window.alert("Login Successfully")
            navigate("/home")
        }

    }
    const test = () => {
        window.alert("i am clicked")
        navigate("/home")


    }

    return (


        <>
            <div className='center'>
                <div class="container-fluid main-header" >

                    <div class="row">


                        <div class="col-md-6 col-12 mx-auto">
                            <div class="row">
                                <h1 className='text-center textstyle' > Login</h1>

                                {/* <!-- left side div --> */}


                                <div class="col-md-6 col-12 main_header_left_login " >
                                    <form onSubmit={loginUser} className='register-form' id='register-form'>
                                        {/* <!-- Email input --> */}
                                        <div class="form-outline mb-5">
                                            <input type="email" id="form2Example1" class="form-control  boxsize " name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email Adress' />
                                            <label class="form-label" for="form2Example1"></label>
                                        </div>

                                        {/* <!-- Password input --> */}
                                        <div class="form-outline mb-3">
                                            <input type="password" id="form2Example2" class="form-control boxsize" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
                                            <label class="form-label" for="form2Example2"></label>
                                        </div>


                                        {/* <!-- Submit button --> */}
                                        <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>

                                        <Link to="/signup" className='llink'>Create a Account</Link>

                                    </form>
                                    <button type='button' onClick={test}> click me</button>
                                </div>

                                {/* <!-- right side div --> */}
                                <div class="col-md-6 col-12 main_header_right_login align-items-center">
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

export default Login