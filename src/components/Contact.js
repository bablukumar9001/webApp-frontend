import React from 'react'

function Contact() {
    return (
        <>
            <div className="contact-info my-5">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 div-center  col-12 mx-auto d-flex justify-content-between">
                            {/* phone number */}
                            <div className="contact-info-item  ">
                                {/* <img src="" alt="image" className='mx-3' /> */}
                                <div className="contact-info-title ">
                                    phone
                                </div>
                                <div className="contact-info-text">
                                    45454545454
                                </div>

                            </div>
                            <div className="contact-info-item ">
                                {/* <img src="" alt="image" /> */}
                                <div className="contact-info-title">
                                    phone
                                </div>
                                <div className="contact-info-text">
                                    45454545454
                                </div>

                            </div>
                            <div className="contact-info-item ">
                                {/* <img src="" alt="image" /> */}
                                <div className="contact-info-title">
                                    phone
                                </div>
                                <div className="contact-info-text">
                                    45454545454
                                </div>

                            </div>
                        </div>
                        <div className="col-md-8 col-12 mx-auto contact-infoo my-5 ">
                            <h1 className='my-5 mx-5' > Get In Touch </h1>

                            <div className='conatct-style'>
                                <form action="/register" method="POST">
                                    <div class="mb-3">
                                        <div class="row">
                                            <div class="col">
                                                <input type="text" class="form-control" placeholder="First name" name="firstname" aria-label="First name" />
                                            </div>



                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label"></label>
                                        <input type="email" class="form-control" placeholder="Email address" name="email" id="exampleInputEmail1"
                                            aria-describedby="emailHelp" />

                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label"></label>
                                        <input type="number" class="form-control" placeholder="Phone" name="phone" id="exampleInputPassword1" />
                                    </div>

                                    <div class="mb-3">
                                        <label for="exampleInputPassword1" class="form-label"></label>
                                        <textarea name="" id="" cols="50 " rows="4"></textarea>

                                    </div>



                                    {/* <!-- radio button --> */}








                                    <button type="submit" class="btn btn-primary">Submit</button>



                                </form>

                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Contact