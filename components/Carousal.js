import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

export default class Carousel extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            slidesToShow: 5,
            pauseOnHover: true,
            slidesToScroll: 1,
            autoplay:true,
            swipeToScroll:true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]

        };
        return (
            <div>
                <Slider {...settings}>
                    <div >
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>
                            <img src="/Images/logos/logo (1).png" alt="client" className='img-fluid' width={100} />
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>
                            <img src="/Images/logos/logo (2).png" alt="client" className='img-fluid' width={180} />
                        </div>
                    </div>

                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (3).png" alt="client" className='img-fluid' width={140} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (4).png" alt="client" className='img-fluid' width={250} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (5).png" alt="client" className='img-fluid' width={200} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (6).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (7).png" alt="client" className='img-fluid' width={140} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (8).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (9).png" alt="client" className='img-fluid' width={100} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (10).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (11).png" alt="client" className='img-fluid' width={130} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (12).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (13).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (14).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (16).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (15).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (17).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (18).png" alt="client" className='img-fluid' width={130} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (19).png" alt="client" className='img-fluid' width={180} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (20).png" alt="client" className='img-fluid' width={130} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (21).png" alt="client" className='img-fluid' width={140} />
                        </div>

                    </div>
                    <div>
                        <div className="d-flex align-items-center justify-content-center" style={{ height: '15vh' }}>

                            <img src="/Images/logos/logo (22).jpeg" alt="client" className='img-fluid' width={60} />
                        </div>

                    </div>
                </Slider>
            </div>
        );
    }
}