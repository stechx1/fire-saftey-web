import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';

const EmergencyLighting = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-1 container `}>
            <h1 className={headingStyles.pHeading}>
              Emergency Lighting Servicing & Maintenance
            </h1>
            <img src="/Images/emergency.jpeg" alt="emergency" className='img-fluid mb-4' />
          </div>

          <div className={`container `}>
            <div>
              <p className={headingStyles.smallpara}>
                Red Fire Safety tests and maintains all types of Emergency
                Lighting systems to BS5266.{' '}
              </p>
              <p className={headingStyles.smallpara} style={{marginBottom:'0px'}}>
                Emergency lighting is required in both commercial and
                residential developments to provide lighting to facilitate
                escape in the event of a power failure, if it fails to operate
                correctly it could leave you in the dark.
              </p>
            </div>
          </div>

          <div className=''>
            <Featurebox
              secHeading='What is emergency lighting? '
              pHeading=' '
              paras={[
                'One of the most important systems for protecting people on your premises is emergency lighting. When there is a power outage, these lights are installed to illuminate areas that are high traffic or at risk (for example, escape routes, high-risk areas, signage and fire safety equipment).',
                'In the event of a power cut, the emergency lighting is designed to automatically illuminate ensuring these at-risk areas are well illuminated allowing evacuation of the building, ensuring they work as required when needed most.',
                'Keeping the building occupants safe is obviously a high priority, so in an emergency, we make sure that you have an emergency lighting system that will not fail by regularly maintaining your systems in compliance with BS5266. ',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='What do we include in our emergency lighting maintenance? '
              pHeading=''
              paras={[]}
              points={[
                'Maintenance completed in accordance with BS5266. ',
                '1 visit per annum arranged convenient times to suit you.',
                'A dedicated 24/7/365 call-out facility, so should your system develop a fault you can call us any time, day or night. ',
                'Fixed service pricing, no hidden fees or charges. ',
                'Fully trained and qualified, multi-skilled engineers.  ',
                'Free advice on system maintenance or improvements. ',
                'Expert knowledge and friendly customer service to support should you have any queries.',
              ]}
              image=''
            />
          </div>

          <div className=' pt-2 container '>
            <h1 className={headingStyles.secHeading}>
              We make monthly emergency lighting testing simple{' '}
            </h1>
            <p className={headingStyles.smallpara}>
              Each month, an engineer will come to your property to complete the
              testing requirements listed in the standard on the same day at the
              same time. It will be no problem for us to attend, you don&apos;t
              have to contact us. In order to ensure your peace of mind, we will
              provide you with evidence of our attendance
            </p>
            <p className={headingStyles.smallpara}>
              In most cases, we use the same engineer every month to ensure the
              engineer knows and understands your property and system, helping
              to spot any issues that have arisen since our last visit.{' '}
            </p>
          </div>
          <div className='container '>
            <p style={{ fontSize: '14px' }}>
              Find out more about our Annual and Monthly Emergency Lighting
              visits by giving us a call on{' '}
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
      <div className='pt-1'>
        <Anniversary />
      </div>
    </>
  );
};

export default EmergencyLighting;
