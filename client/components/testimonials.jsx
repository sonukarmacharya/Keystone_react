import React from 'react'
// import './scss/style.scss';

export default function testimonials() {
    return (
        <div className="testimonial-area">
        <div className="container">
           <div className="testimonial-main">
                {/* <!-- Section-tittle --> */}
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-5  col-md-8 pr-0">
                        <div className="section-tittle text-center">
                            <h2> Tetimonials</h2>
                        </div>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                        <div className="col-lg-10 col-md-9">
                            <div className="h1-testimonial-active">
                                {/* <!-- Single Testimonial --> */}
                                <div className="single-testimonial text-center">
                                    <div className="testimonial-caption ">
                                        <div className="testimonial-top-cap">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                        </div>
                                        {/* <!-- founder --> */}
                                        <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                            <div className="founder-img">
                                                <img src="#" alt=""/>
                                            </div>
                                        <div className="founder-text">
                                            <span>Jecika Thapa</span>
                                            <p>Australia</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Single Testimonial --> */}
                                <div className="single-testimonial text-center">
                                    <div className="testimonial-caption ">
                                        <div className="testimonial-top-cap">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                                        </div>
                                        {/* <!-- founder --> */}
                                        <div className="testimonial-founder d-flex align-items-center justify-content-center">
                                            <div className="founder-img">
                                                <img src="#" alt=""/>
                                            </div>
                                        <div className="founder-text">
                                            <span>Rajan Khanal</span>
                                            <p>USA</p>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
           </div>
        </div>
    </div>
    )
}
