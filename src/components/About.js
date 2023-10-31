import React from 'react'
import growth from '../images/growth.png'

function About() {
    return (
        <>

            <div className="container container-box">
                <form action="">

                    <div className="row">
                        <div className="col-md-4 col-12 mx-auto">
                            <img className='fluid-image image-style' src={growth} alt="" />
                        </div>

                        <div className="col-md-6 col-12 mx-auto">
                            <div className="profile-head my-3">
                                <h1> Bablu Kumar</h1>
                                <h6>web developer</h6>

                            </div>

                            {/* <nav>
                                <ul class="nav nav-pills myclass">
                                    <li class="nav-item">
                                        <a class="nav-link active" role="tablist" aria-current="page" href="#home">About</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" role="tablist" href="#profile">Timeline</a>
                                    </li>

                                </ul>
                            </nav> */}


                            <nav>
                                <div class="nav nav-tabs myclass" id="nav-tab" role="tablist">
                                    <button class="nav-link active" id="home" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                                        About
                                    </button>
                                    <button class="nav-link" id="profile" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                                        Timeline
                                    </button>

                                </div>
                            </nav>
                        </div>

                        <div className="col-md-2  my-5">
                            <button type="submit" class="btn btn-primary">Edit Profile</button>
                        </div>

                    </div>

                    <div className="row mx-5">
                        <div className="col-md-4">
                            <div className="profile-work">
                                <h3> Works Links</h3>
                                <a href=" https://www.w3schools.com/bootstrap/bootstrap_buttons.asp " target="_blank">Youtube</a><br />
                                <a href=" https://www.w3schools.com/bootstrap/bootstrap_buttons.asp " target="_blank">google</a><br />
                                <a href=" https://www.w3schools.com/bootstrap/bootstrap_buttons.asp " target="_blank">yahooo</a><br />
                                <a href=" https://www.w3schools.com/bootstrap/bootstrap_buttons.asp " target="_blank">amazon</a><br />
                                <a href=" https://www.w3schools.com/bootstrap/bootstrap_buttons.asp " target="_blank">Linkdin</a><br />
                            </div>
                        </div>
                        {/* right side data toogle  */}

                        <div className="col-md-8 pl-5 about-info">
                            <div className="tab-content" id='myTabContent'>
                                <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>

                                </div>

                                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>

                                    </div><div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>

                                    </div><div className="row">
                                        <div className="col-md-6">
                                            <label > User ID</label>
                                        </div>
                                        <div className="col-md-6">
                                            <label >45465265666664646 </label>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>




                </form>
            </div>
        </>
    )
}

export default About