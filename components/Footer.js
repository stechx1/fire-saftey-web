
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router'
import React from 'react'
import styles from '../styles/Footer.module.css'
import Carousel from './Carousal';
const Footer = () => {
    const router = useRouter();
    return (
        <>
            <div className={` my-2 ${styles.logosContainer}`}>
                <Carousel/>
                {/* <div className='row'>
                    <div className='col-lg-1 1 col-md-3 col-sm-5 col-6 my-4'>
                        <img src="/Images/Client/client logo 1.png" alt="client" className='img-fluid' width={120} />
                    </div>
                    <div className='col-lg-1 offset-lg-1 col-md-3 col-sm-5 col-6 my-4'>
                        <img src="/Images/Client/client logo 2.png" alt="client" className='img-fluid' width={120} />
                    </div>
                    <div className='col-lg-1 offset-lg-1 col-md-3 col-sm-5 col-6 my-4'>
                        <img src="/Images/Client/client logo 4.png" alt="client" className='img-fluid' width={120} />
                    </div>
                    <div className='col-lg-1 offset-lg-1 col-md-3 col-sm-5 col-6 my-4'>
                        <img src="/Images/Client/client logo 3.png" alt="client" className='img-fluid' width={120} />
                    </div>
                    <div className='col-lg-1 offset-lg-1 col-md-3 col-sm-5 col-6 my-4'>
                        <img src="/Images/Client/client logo 5.png" alt="client" className='img-fluid' width={120} />
                    </div>
                    <div className='col-lg-1 offset-lg-1 col-md-3 col-sm-5 col-6 my-4'>
                        <div className={`d-flex justify-content-around gap-5 ${styles.doubleImage}`}>
                            <img src="/Images/Client/client logo 6.png" alt="client" className='img-fluid' width={80} />
                            <img src="/Images/Client/client.jpeg" alt="client" className='img-fluid' width={80} />
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="container-fluid" style={{background: '#e32213'}}>
            <div className={`container ${styles.footer} `}>
                <div className={`d-flex w-100 gap-3 ${styles.innerRow} `}>
                    <div className='d-flex flex-column gap-2 px-2 ' >
                        <span className={styles.heading}>Our Address</span>
                        {/* <hr className={styles.hr} /> */}
                        <span>Lockheed House,</span>
                        <span>Unit 1, 238,</span>
                        <span>Green Lane,</span>
                        <span>London,</span>
                        <span>SE9 3TL</span>
                    </div>
                    <div className='d-flex flex-column gap-2 px-2 ' >
                        <span className={styles.heading}>Contact Us</span>
                        <span>Tel: 01689 493 641</span>
                        <span>Email: info@redfiresafety.com</span>
                    </div>
                </div>
            </div>
            </div>

            <div className=" text-center text-light px-md-0 px-2" style={{ padding: '1.5rem 0rem', background: '#e32213', borderTop: '1px solid white' }}>
                <span>Copyright 2021 @ Red Fire Saftey | <span style={{cursor:'pointer'}} onClick={()=>{router.push('/site-map')}}>Site Map</span> | <span onClick={()=>{router.push('/contact')}} style={{cursor:'pointer'}}>Contact</span> </span>
            </div>

        </>
    )
}

export default Footer