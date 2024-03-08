import React from 'react';
import Featurebox from './Featurebox';
import styles from '../styles/Home.module.css';
import AnniversaryStyles from '../styles/Anniversary.module.css';
import { useRouter } from 'next/router';

const Anniversary = () => {
  const router = useRouter();
  return (
    <>
      <div
        className={`container-fluid ${
          router.pathname !== '/contact' && 'mt-md-4 mt-3'
        } `}
        style={{ background: `#242931` }}
      >
        <div
          className={`container text-white d-flex ${AnniversaryStyles.mainContainer}`}
        >
          <div className={`d-flex flex-column w-100 ${AnniversaryStyles.left}`}>
            <h3 className={`${styles.secHeading}`}>
              Red Fire Safety are celebrating 20 years of successful trading!
            </h3>
            <p className={styles.smallpara}>
              This significant achievement speaks volumes about the quality of
              service and dedication that we have provided to our clients over
              the years.
            </p>
            <p className={styles.smallpara}>
              Expanding across multiple counties and maintaining a strong
              presence in areas like London, Buckinghamshire, Surrey, Berkshire,
              Essex, and Hertfordshire demonstrates the trust and reliability
              that clients have placed in Red Fire Safety. Moreover, our ability
              to deliver projects across the UK showcases our commitment to
              meeting the needs of clients nationwide.
            </p>
            <p className={styles.smallpara}>
              Our focus on knowledge, expertise, and efficiency in supporting
              businesses in both commercial and residential sectors with
              compliance and planned maintenance projects is what drives us to
              provide high-quality services while also ensuring a positive and
              friendly experience for our clients.
            </p>
            <p className={styles.smallpara}>
              Here's to many more years of success and continued growth for Red
              Fire Safety!
            </p>
          </div>
          <div className='w-100 d-flex'>
            <img
              src='/Images/anniversary.jpg'
              alt='anniversary'
              className='img-fluid'
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Anniversary;
