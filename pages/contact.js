/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/Contact.module.css';
import Anniversary from '../components/Anniversary';
import headingStyles from './features/Feature.module.css';
import Form from '../components/Form';
import Link from 'next/link';

const Contact = () => {
  return (
    <>
      <div
        className={`d-flex justify-content-between pt-3 px-3 ${styles.mainContainer}`}
        style={{ backgroundColor: 'black', color: 'white' }}
      >
        <div
          className={`d-flex flex-column align-items-center justify-content-around gap-2 ${styles.mainRight} `}
        >
          <div className={`d-flex flex-column ${styles.callBox}`}>
            <div className='d-flex flex-column align-items-center  gap-2 p-5'>
              <a href={`tel:01689-493-641`}>
                <img
                  src='/Images/Contact/Whitephone.png'
                  alt='Fire1'
                  className='img-fluid'
                  width={30}
                  height={30}
                />
              </a>
              <a href={`tel:01689-493-641`}>
                <h3 className={`${styles.secHeading} mt-1`}> CALL US </h3>
              </a>
              <span className={styles.FeaturesHeading}>
                <a href={`tel:01689-493-641`}>01689 493 641</a>
              </span>
            </div>
          </div>

          <a
            href={`mailto:info@redfiresafety.com`}
            className={`d-flex flex-column align-items-center  gap-2 px-4 ${styles.emailBox}`}
          >
            <img
              src='/Images/Contact/WhiteVector.png'
              alt='Fire1'
              className='img-fluid'
              width={60}
              height={60}
            />
            <h3 className={`${styles.secHeading} mt-3`}>EMAIL</h3>
            <p className={styles.FeaturesHeading}> info@redfiresafety.com</p>
          </a>
        </div>
        {/* <div className='w-100'>
          <video src="/Videos/contact.mp4" className="img-fluid" autoPlay={true} loop={true} muted={true}  ></video>
        </div> */}
        <div
          className={`d-flex flex-column align-items-center justify-content-around gap-2 ${styles.mainRight} `}
        >
          <div
            className={`d-flex flex-column align-items-center p-3 gap-2 ${styles.callBox}`}
          >
            <h1 className={styles.secHeading}>SOCIAL MEDIA</h1>
            <div className='d-flex gap-3'>
              <a
                target='_blank'
                href='https://uk.linkedin.com/company/red-fire-safety-services-limited'
                rel='noreferrer'
              >
                <i
                  style={{ cursor: 'pointer' }}
                  className='fa fa-linkedin fs-3'
                  aria-hidden='true'
                ></i>
              </a>

              <a
                target='_blank'
                href='https://www.instagram.com/redfiresafetyltd/'
                rel='noreferrer'
              >
                <i
                  style={{ cursor: 'pointer' }}
                  className='fa fa-instagram fs-3'
                  aria-hidden='true'
                ></i>
              </a>
            </div>
          </div>
          <div
            className={`d-flex flex-column align-items-center gap-2 py-2 text-center ${styles.addressBox}`}
          >
            <img
              src='/Images/Contact/WhiteGroup 1.png'
              alt='Fire1'
              className='img-fluid'
              width={50}
              height={70}
            />
            <h1 className={styles.secHeading}>ADDRESS</h1>
            <p className={styles.FeaturesHeading}>
              Red Fire Safety Limited, <br /> 160 Eltham Hill, Eltham SE9 5EA
            </p>
          </div>
        </div>
      </div>
      <div className=''>
        <Anniversary />
      </div>
    </>
  );
};

export default Contact;
