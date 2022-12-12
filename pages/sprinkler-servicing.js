import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import styles from '../pages/features/Feature.module.css';
import headingStyles from '../pages/features/Feature.module.css';

const SprinklerServicing = () => {
  return (
    <>
      <div className={`${styles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-1 container `}>
            <h1 className={styles.pHeading}>
              Sprinkler Servicing & Maintenance
            </h1>
            <img src="/Images/sprinkle.jpeg" alt="spirnkle Services" className='img-fluid mb-4' />
          </div>

          <div className={`container `}>
            <div className={`d-flex flex-column `}>
              <p className={styles.smallpara}>
                For sprinkler systems to function properly during a fire, they
                need to be maintained and serviced regularly. A properly
                maintained fire sprinkler system will maintain your certificate
                of conformity, which may be required by insurance companies.
                However, a properly functioning sprinkler is essential to help
                save property and lives during a fire.{' '}
              </p>
              <p className={styles.smallpara}>
                Red Fire Safety offers comprehensive service and maintenance for
                sprinkler systems. We can inspect, repair and maintain all types
                of sprinkler systems, even if we didn’t fit them originally.{' '}
              With a reputation for quality and reliability, our experienced,
              certified engineers are familiar with all service and maintenance
              procedures.{' '}
              Maintenance varies depending on the type of fire sprinkler system,
              but our service typically includes:
            </p>
            </div>
            <div className=' mb-1  '>
              <p style={{ fontSize: '14px' }} className='m-0 my-1'>
              <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />
                Water supplies (including overhauling and returning to service
                pumps)
              </p>
              <p style={{ fontSize: '14px' }} className='m-0 my-1'>
              <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />
                Control valves & associated equipment
              </p>
              <p style={{ fontSize: '14px' }} className='m-0 my-1'>
              <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />
                Flow switches, test valves etc
              </p>
              <p style={{ fontSize: '14px' }} className='m-0 my-1'>
              <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />
                Inspection of installation pipework and testing of sprinkler
                heads
              </p>
              <p style={{ fontSize: '14px' }} className='m-0 my-1'>
              <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />
                Continued conformity
              </p>
              <p style={{ fontSize: '14px' }} className='m-0 my-1'>
              <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />
                Training and liaison with client on good housekeeping procedures
              </p>
            </div>
            <p className={`${styles.smallpara} pt-3`}>
              In addition to Domestic, Residential, and Commercial fire
              sprinkler systems, we provide maintenance contracts for a wide
              range of buildings, including offices, healthcare institutions,
              universities, schools, and government buildings.
            </p>
          </div>

          <div className=' container '>
            <h1 className={styles.secHeading}>Flow Switch Testing</h1>
            <p className={styles.smallpara}>
              Flow switch testing should be conducted every three months in
              accordance with current standards. A flow switch is used to
              monitor the flow of different types of substances - usually air or
              water. It senses different pressure generated from different
              flows.
            </p>
          </div>

          <div className=''>
            <Featurebox
              secHeading='What we offer '
              reverse={false}
              pHeading=''
              paras={[
                'With Red Fire Safety you can be assured that your sprinkler system will perform as designed and installed in the event of a fire. All commercial sprinkler systems should be serviced with BSEN 12845 standards which is generally one major visit per year and one minor visit per year',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>

          <div className='  container '>
            <h1 className={styles.secHeading}>
              Houses of Multiple Occupancy (HMO){' '}
            </h1>
            <p className={styles.smallpara}>
              When a fire breaks out in a multi-occupancy building, sprinkler
              systems can be crucial. A fire in a dwelling with a working
              sprinkler system has never caused multiple fire related deaths in
              the UK.{' '}
            </p>
          </div>

          <div className=''>
            <Featurebox
              secHeading='Weekly Fire Pump & Alarm Testing '
              reverse={true}
              pHeading=''
              paras={[
                'Commercial fire sprinkler systems are designed to protect life and property. ',
                'A sprinkler fire pump engine, along with any reserves you may have, should be started and turned over every week to ensure they are working correctly and comply with British Standards. It is also your responsibility to maintain the sprinklers regularly to ensure their efficiency should the need arise. ',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>

          <div className='container '>
            <p style={{ fontSize: '14px' }}>
              For more information on how we can install, repair or maintain
              your sprinkler system, give us a call on{' '}
              <span style={{ color: '#C32128', fontWeight: 'bold' }}>
                01689 493 641
              </span>{' '}
              or email{' '}
              <span style={{ color: '#C32128', fontWeight: 'bold' }}>
                info@redfiresafety.com
              </span>{' '}
              today.
            </p>
          </div>
        </div>
        <div className={headingStyles.form}>
          <Form />
        </div>
      </div>
      <div className=''>
        <Anniversary />
      </div>
    </>
  );
};

export default SprinklerServicing;
