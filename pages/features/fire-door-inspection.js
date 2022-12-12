import React from 'react';
import Anniversary from '../../components/Anniversary';
import Featurebox from '../../components/Featurebox';
import Form from '../../components/Form';
import styles from './Feature.module.css';
const FireDoorInspection = () => {
  return (
    <>
      <div className={`${styles.main} d-flex container-lg`}>
        <div className={`w-100`}>
          <div className={` pt-1 container `}>
            <h1 className={styles.pHeading}>
              Fire Door Inspection & Maintenance{' '}
            </h1>
            <img src="/Images/fire-door-inspection.jpeg" alt="fireDoor" className="img-fluid mb-4" />
          </div>

          <div className={`container `}>
            <div className={`d-flex flex-column `}>
              <p className={styles.smallpara}>
                Fire doors are life safety systems and play a crucial role in
                the passive fire protection of a building. They prevent the flow
                of smoke and fire and help compartmentalise a building to
                provide a safe means of escape for its occupants. They are
                essential in all buildings and must be regularly inspected,
                tested and maintained to meet the requirements of article 17 of
                the Regulatory Reform (Fire Safety Order) 2005.{' '}
              </p>
              <p className={styles.smallpara}>
                According to current guidelines, fire doors and their components
                should be checked periodically based on the building&apos;s fire
                risk assessment. Fire door inspections should be performed every
                six months, according to the fire door inspection scheme.{' '}
              </p>
            </div>
          </div>

          <div className='container'>
            <h1 className={styles.secHeading}>
              What&apos;s Included in a Fire Door Inspection?{' '}
            </h1>
            <p style={{ fontSize: '14px', padding: '5px 0px' }}>
              The inspection will involve checking that the gap around the door
              frame and threshold is correct, hinge condition and certification,
              signage, overhead door closers, fire rated glass, intumescent
              seals, smoke seals, locks, latches, handles. This includes any
              riser or electrical cupboards.{' '}
            </p>
          </div>

          <div className=''>
            <Featurebox
              secHeading='Qualified Door Check Enabled Inspectors '
              pHeading=''
              paras={[
                'All our fire door inspectors are (NAFDI) National Association of  Fire Door Inspectors (NAFDI) certified Engineers. This gives tenants, building managers and owners the peace of mind that the fire doors within their property have been competently checked and that any remedial actions needed to meet the requirements of BS476 have been highlighted. ',
                '',
              ]}
              points={[]}
              image='/Images/iStock-513116744.jpeg'
            />
          </div>

          <div className=''>
            <Featurebox
              reverse={true}
              secHeading='Fire Door Inspection Report '
              pHeading=''
              paras={[
                'Following the fire door inspection you will receive a detailed report which itemises the pass/fail rating for each door based on required criteria. The report also includes a full list of any remedial actions needed to bring the doors up to the necessary standard. ',
                '',
              ]}
              points={[]}
              image='/Images/checks.jpg'
            />
          </div>

          <div className=''>
            <Featurebox
              secHeading='Remedial Works '
              pHeading=''
              paras={[
                'We are able to provide quotes to undertake any maintenance works necessary to bring your failed fire doors back to required standards. This applies not only to failings detailed in our inspection reports but also those highlighted by your existing fire risk assessment. ',
                '',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>

          <div className=' container pt-1'>
          
            <p style={{ fontSize: '14px' }}>
              Find out more about our Fire Door Inspections by giving us a call
              on{' '}
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
        <div className={styles.form}>
          <Form />
        </div>
      </div>
      <div className='pt-1'>
        <Anniversary />
      </div>
    </>
  );
};

export default FireDoorInspection;
