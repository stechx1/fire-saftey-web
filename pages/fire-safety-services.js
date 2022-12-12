import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from '../pages/features/Feature.module.css';

const FireSafetyServices = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-2 container `}>
            <h1 className={headingStyles.pHeading}>Fire Safety Services</h1>
          </div>

          <div className={`container `}>
            <div className={`d-flex flex-column `}>
              <p className={headingStyles.smallpara}>
                We provide cost effective fire safety services and solutions in
                fire protection to HMOs, Commercial and Residential settings.
                Whatever your fire safety requirements are; e.g fire training,
                fire risk assessments and or installed fire equipment
                maintenance we can assist you in finding a solution that meets
                your budget to ensure compliance with current fire legislation
                and reduce the risk of fire.
              </p>
            </div>
          </div>

          <div className='container'>
            <h1 className={`${headingStyles.secHeading}`}>Event Fire Safety</h1>
            <img src="/Images/event fire safety.jpeg" alt="event fire safety" className="img-fluid mb-4" />
          </div>

          <div className=' '>
            <Featurebox
              reverse={true}
              secHeading=''
              pHeading=''
              paras={[
                'There is a separate guide in the Regulatory Reform (Fire Safety) Order 2005, about outdoor events and venues. We can take away some of your organisational worry by looking after this side of your event. We do this by:',
              ]}
              points={[
                'Carrying out a Fire Risk Assessment at the venue ',
                'Providing any fire safety equipment your event may require on either a hire or purchase basis',
                'Providing Fire Awareness Training your staff or volunteers ',
                'Providing a professional team of Fire Marshalls to attend your event ',
              ]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className={`container d-flex flex-column`}>
            <h1 className={headingStyles.secHeading}>Maintenance Contracts</h1>
            <span className={headingStyles.smallpara}>
              Red Fire Safety Service Ltd offer flexible and cost-effective fire
              safety equipment maintenance contracts where our qualified
              engineers will service and maintain your fire safety detection
              systems and equipment to the appropriate British Standards on a
              regular basis.{' '}
            </span>
          </div>
          <div className='pt-3'>
            <Featurebox
              secHeading=''
              pHeading=''
              paras={[
                'We also offer a 24-hour emergency callout for customers who have a maintenance contract with us.  On-call services may require a monitoring contract with a third-party monitoring station which Red Fires Safety Services Ltd can arrange on your behalf if required. ',
                'Prior to agreeing a maintenance contract our engineers will carry out an initial fire safety inspection which will include: ',
              ]}
              points={[
                'An inspection of all existing documentation and maintenance records',
                'Confirmation of which British Standards the equipment has been installed to ',
                'A test of Manual Call Points (MCPs) ',
                'A test of resettable detectors ',
                'A test of audio and visual alarm devices ',
              ]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className={` pt-1 d-flex flex-column container `}>
            <span className={headingStyles.smallpara}>
              Following the inspection, the customer will be informed of any
              non-compliance issues identified along with a Red Fire Safety
              maintenance contract quotation.{' '}
            </span>
            <span className={headingStyles.smallpara}>
              As part of our servicing and maintenance contract our engineers
              will record all inspections, servicing and maintenance work
              carried out, tests and defects identified/resolved providing you
              with a complete record of all activities associated with your fire
              safety system.{' '}
            </span>
            <span className={headingStyles.smallpara}>
              Upon successful completion of servicing and maintenance our
              engineers will issue any associates certificates required.{' '}
            </span>
          </div>

          <div className={` pt-2 d-flex flex-column container`}>
            <h1 className={headingStyles.secHeading}>
              Portable Appliance Testing (PAT) SERVICE
            </h1>
            <span className={headingStyles.smallpara}>
              (PAT testing) is the term used to describe the examination of
              electrical appliances and equipment to ensure they are safe to
              use. Most electrical safety defects can be found by visual
              examination, but some types of defect can only be found by
              testing.{' '}
            </span>
          </div>
          <div className='pt-2'>
            <Featurebox
              reverse={true}
              secHeading=''
              pHeading=''
              paras={[
                'The Electricity at Work Regulations 1989 state that any electrical equipment that has the potential to cause injury must be maintained in a safe condition. To meet this requirement, it is recommended that regular inspection and testing of electrical equipment is carried out.',
                'Red Fire Safety Services Ltd qualified engineers can: ',
              ]}
              points={[
                'Design an inspection and test schedule appropriate for your electrical equipment and the environment it is used in. ',
                'Carry out visual inspections on a regular basis ',
                'Carry out Portable Appliance Testing on a regular basis ',
              ]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>

          <div className='pt-1'>
            <Featurebox
              secHeading='Fire Safety Trolley '
              pHeading=''
              paras={[
                'Our fire point trolleys can be purchased or hired and are designed to provide the equipment required for temporary fire points and can be linked together to provide fire alarm activation alerts across a complete site.  They are ideal for use at events, fairs, building sites, building refurbishments etc and contain the following: ',
              ]}
              points={[
                'Appropriate Fire Extinguishers  ',
                'Fire Blanket ',
                'First Aid Kit  ',
                'Spill Kit ',
                'Eye Rinse Kit ',
                'Fire Alarm Call Point with Howler ',
                'Radio Links ',
                'Smoke Detectors ',
                'Appropriate Fire Signage ',
                'Fire Action Notice ',
              ]}
              image=''
            />
          </div>
          <div className=' container pt-1'>
            <p style={{ fontSize: '14px' }}>
              To find out more about our Fire Safety Services give us a call on{' '}
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

export default FireSafetyServices;
