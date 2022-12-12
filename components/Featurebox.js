/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from '../styles/FeatureBox.module.css';
const Featurebox = ({
  secHeading,
  pHeading,
  paras,
  image,
  reverse,
  points,
  customBullet,
}) => {
  return (
    <>
      <div
        className={`container ${
          reverse && 'flex-xl-row-reverse flex-xxl-row-reverse'
        } ${styles.mainContainer} `}
      >
        <div>
          {pHeading !== '' && (
            <h1 className={`${styles.pHeading} `}>{pHeading}</h1>
          )}
          {secHeading !== '' && (
            <h3
              className={`${styles.secHeading} `}
              style={{ marginBottom: '1rem' }}
            >
              {secHeading}
            </h3>
          )}
          {paras[0] !== '' &&
            paras.map((para, index) => (
              <p key={index} style={{ fontSize: '14px' }}>
                {para}
              </p>
            ))}
          {points.length !== 0 && (
            <>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {points.map((point, index) => (
                  <div key={index} style={{display: 'flex', alignItems: "flex-start"}}>
                    <img style={{marginTop: "-5px"}}
                      src='/Images/Bullet.jpeg'
                      alt='bullet'
                      className='img-fluid pb-1'
                      width={35}
                    />
                    <p style={{ fontSize: '14px' }} key={index}>
                      {' '}
                      {point}{' '}
                    </p>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
        {/* {image !=='' && <div className={` ${styles.right} ${points.length !== 0 ? styles.half : styles.full} `}>
          <img src={image} alt="frame" className='img-fluid' />
        </div>} */}
      </div>
    </>
  );
};

export default Featurebox;
