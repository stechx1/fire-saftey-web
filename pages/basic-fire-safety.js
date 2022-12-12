/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';

const BasicFireSafety = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className='pt-1 container '>
            <h1 className={` ${headingStyles.pHeading}`}>
              Basic Fire Safety & Fire Marshall Training{' '}
            </h1>
            <img
              src='/Images/fire-safety.jpeg'
              alt='fire-safety'
              className='img-fluid mb-4'
            />
          </div>
          <div className=' container'>
            <h1 className={` ${headingStyles.secHeading} `}>
              Fire Safety Training is Mandatory
            </h1>
            <p className={headingStyles.smallpara}>
              Fire safety training in the workplace is mandatory for all
              employers. The Article 21 (1)  of The Regulatory Reform (Fire
              Safety Order) 2005 states that &quot;The responsible person must
              ensure that his employees are provided with adequate safety
              training&quot;
            </p>

            <h1 className={` ${headingStyles.secHeading} `}>
              Fire Safety Awareness for all staff members
            </h1>

            <div className=''>
              <Featurebox
                paras={[
                  'UK Government guidance states every employee must receive a fire safety training:',
                ]}
                points={[
                  'At the time of joining your company.',
                  'In the event of any significant changes , working processes and structural premises changes.',
                  'Additionally all employees must receive annual fire safety refresher training.',
                ]}
                image='/Images/FeatureBox/Rectangle 2.png'
              />
            </div>

            <h1 className={` ${headingStyles.secHeading} `}>
              Would you like to Train as a Fire Marshall?
            </h1>
            <p className={headingStyles.smallpara}>
              Fire marshal training will prepare you to protect yourself and
              others in the event of a fire. This course covers a variety of
              topics, such as identifying fires, following fire procedures,
              evacuating employees, and putting out small fires.
            </p>
          </div>
          <div className=' '>
            <Featurebox
              secHeading='What is a Fire Marshal '
              pHeading=''
              paras={[
                "Property owners in the United Kingdom are legally required to comply with the Regulatory Reform (Fire Safety) Order 2005's fire safety regulations. In the event of a fire, this law describes the precautions that should be taken to ensure the safety of occupants. ",
                'To fully comply with fire regulations, certain steps should be taken, such as conducting a fire risk assessment, implementing fire safety protocols, and training occupants on what to do if a fire occurs.',
                'In a company or managed building, a fire marshal is responsible for fire safety, prevention, and evacuation procedures. ',
                'All fire marshals must complete special fire marshal training. They’ll  receive Fire Marshall Certification after finishing their training, proving that they are competent to fulfill their fire safety duties.',
                'Fire marshals are responsible for preventing fires in workplaces, care homes, hotels, event spaces, etc. They should evacuate their coworkers, customers, or both to a safe place and make sure the evacuation plan is followed and the buildings are evacuated calmly, quickly, and efficiently.',
              ]}
              points={[]}
              image='/Images/fire-marshall.jpeg'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='How Many Fire Marshals Do I Need? '
              pHeading=''
              paras={[
                'The number of fire marshals necessary per location is determined by a variety of factors, including:',
              ]}
              points={[
                'The size of the premises ',
                'Who will be on the premises ',
                'The number of persons Working on the premises at any given time',
                'Accessibility',
                'The number of floors in the building ',
              ]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className=' container '>
            <p className={headingStyles.smallpara}>
              In order to determine the number of fire marshals required, a fire
              risk assessment must be conducted. The risk assessment report will
              provide details on what fire risks the building has and how to
              solve them. The report will also include how many Fire Marshals
              are needed to handle the risk.
            </p>
            <p className={headingStyles.smallpara}>
              We provide training at the customers&apos; premises with relevant
              materials such as training manuals and pocket guides to all
              participants. Upon successful completion of the course, a
              certificate is issued.
            </p>
            <p className={headingStyles.smallpara}>
              It is mandatory to have a clear outdoor area of at least 5m x 5m
              for the practical elements of the fire protection courses.
            </p>
            <p className={headingStyles.smallpara}>
              Since it may not be possible for all staff to attend the same
              course at the same time, booking multiple courses at the same time
              will receive a discount on each course in addition to the first.{' '}
            </p>
          </div>
          <div className={`container d-flex ${headingStyles.coursesContainer}`}>
            <div className='d-flex flex-column w-100'>
              <h1 className={headingStyles.secHeading}>
                We currently offer the courses:
              </h1>
              <p className={`${headingStyles.smallpara} m-0`}>
                <img
                  src='/Images/Bullet.jpeg'
                  alt='bullet'
                  className='img-fluid pb-1'
                  width={35}
                />{' '}
                Basic Fire Protection Training
              </p>
              <p className={`${headingStyles.smallpara} m-0`}>
                <img
                  src='/Images/Bullet.jpeg'
                  alt='bullet'
                  className='img-fluid pb-1'
                  width={35}
                />{' '}
                Fire Warden/Marshal Instruction
              </p>
              <p className={`${headingStyles.smallpara} m-0`}>
                <img
                  src='/Images/Bullet.jpeg'
                  alt='bullet'
                  className='img-fluid pb-1'
                  width={35}
                />{' '}
                Fire Warden/Marshal Refresher
              </p>
              <p className={`${headingStyles.smallpara} m-0`}>
                <img
                  src='/Images/Bullet.jpeg'
                  alt='bullet'
                  className='img-fluid pb-1'
                  width={35}
                />{' '}
                Emergency First Aid at Work
              </p>
              <p className={`${headingStyles.smallpara} m-0`}>
                <img
                  src='/Images/Bullet.jpeg'
                  alt='bullet'
                  className='img-fluid pb-1'
                  width={35}
                />{' '}
                First Aid for Appointed Persons
              </p>
            </div>
          </div>

          <div className='container pt-2'>
            <p style={{ fontSize: '14px' }}>
              To book your staff members onto our fire training course please
              email{' '}
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
      <div className='pt-1'>
        <Anniversary />
      </div>
    </>
  );
};

export default BasicFireSafety;
