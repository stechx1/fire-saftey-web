import React from 'react'
import Featurebox from './Featurebox'
import styles from '../styles/Home.module.css'
import AnniversaryStyles from '../styles/Anniversary.module.css'
import { useRouter } from 'next/router'

const Anniversary = () => {
  const router = useRouter();
  return (
    <>
      <div className={`container-fluid ${router.pathname !== '/contact' && 'mt-md-4 mt-3'} `} style={{ background: `#242931` }}>
        <div className={`container text-white d-flex ${AnniversaryStyles.mainContainer}`}>
          <div className={`d-flex flex-column w-100 ${AnniversaryStyles.left}`}>
            <h3 className={`${styles.secHeading}`}>How Old Are We ? </h3>
            <p className={styles.smallpara}>Red Fire Safety are pleased to announce its 18th year of successful trading and would like to thank all clients both old and new for their continued support over the years.  </p>
            <p className={styles.smallpara}>Formed in 2004 the business has evolved and grown into a leading provider of Fire Services.</p>
            <p className={styles.smallpara}>Red Fire Safety now successfully operates across London, Buckinghamshire , Surrey, Berkshire, Essex and Hertfordshire. We also cover other counties such as Bedfordshire, Cambridgeshire, Oxfordshire, East Sussex and West Sussex. We can also deliver projects across the UK. </p>
            <p className={styles.smallpara}>Over the 18 years we&apos;ve been in operating we&apos;ve grown in knowledge and expertise focusing on supporting businesses in the commercial and residential sectors with compliance through planned maintenance projects in a friendly yet efficient manner.  </p>
          </div>
          <div className='w-100 d-flex'>
            <img src="/Images/anniversary.jpg" alt="anniversary" className="img-fluid" />
          </div>

        </div>
      </div>
    </>
  )
}

export default Anniversary