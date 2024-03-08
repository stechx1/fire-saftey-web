import React from 'react';
import Anniversary from '../components/Anniversary';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';
const EvacuationPlanAndDrills = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-1 container `}>
            <h1 className={headingStyles.pHeading}>
              Evacuation Plans & Drills
            </h1>
            <img src="/Images/evacuation plans.jpeg" alt="homeimg" className='img-fluid mb-4' />
          </div>
          <div className={`container `}>
            <h3 className={headingStyles.secHeading}>
              Why do I need an Evacuation plan?{' '}
            </h3>
            <p>
              If you&apos;re an employer, owner or occupier of premises that
              aren&apos;t a &apos;single private dwelling&apos; (a private
              home), it&apos;s your responsibility to keep people safe if there
              is a fire.
            </p>
            <p className={headingStyles.smallpara}>
              Though prevention is always best, you are also required by law to
              make a detailed fire emergency plan so your people can keep
              themselves and members of the public out of danger.
            </p>
          </div>

          <div className={` container d-flex flex-column gap-1 `}>
            <h1 className={headingStyles.secHeading}>
              What should be covered in your plan?
            </h1>
            <span className={`${headingStyles.smallpara}`}>
              A simple plan must show that you have:
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              A suitable fire detection system.
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              A process for identifying false alarms.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              A clear understanding of who calls 999.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              A clear passageway to all escape routes.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Suitable routes and exits for people to escape.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Clearly marked escape routes – these should be as short and direct
              as possible.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Emergency doors that open easily – and emergency lighting if it is
              needed.
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Providing training so your employees know how to use the escape
              routes{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Set out a safe meeting point for staff.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Consider the needs of anyone who might not be able to escape
              quickly if fire – for example, wheelchair users or
              people with visual impairments.{' '}
            </span>
          </div>
          <div
            className={`container pt-1 d-flex flex-column gap-1 ${headingStyles.pointsPara} `}
          >
            <h1 className={headingStyles.secHeading}>
              What else should you consider in your fire plan?{' '}
            </h1>
            <span className={`${headingStyles.smallpara} `}>
              Other important topics to cover include:
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              What to do on discovering a fire.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              How to warn others if there is a fire.
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Calling the fire brigade.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Evacuation of the premises including those particularly at risk.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Power/process isolation.
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Places of assembly and roll call.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Liaison with emergency services.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Identification of key escape routes.
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              What firefighting equipment you provide and where it is located.{' '}
            </span>
            <span className={headingStyles.smallpara}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              Remember to test your plan by carrying out drills.{' '}
            </span>
          </div>
          <div className='container '>
            <p style={{ fontSize: '16px', fontWeight: '600' }} className='my-3'>
              If you&apos;re having trouble formulating a plan, need some advice
              on general or Personal Emergency Evacuation Plans or need
              supervision with your fire drills, Red Fire Safety will help you
              identify what it is you need in place to make your business safe.{' '}
            </p>
            <p style={{ fontSize: '14px' }}>
              Find out more about our PEEPs & GEEPS by giving us a call on{' '}
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
      <div >
        <Anniversary />
      </div>
    </>
  );
};

export default EvacuationPlanAndDrills;
