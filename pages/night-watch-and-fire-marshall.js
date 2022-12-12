import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';

const NightWatch = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-2 container `}>
            <h1 className={headingStyles.pHeading}>
              Night Watch & Fire Marshall Services
            </h1>
            <img src="/Images/night-watch.jpeg" alt="night Watch" className="img-fluid mb-4" />
          </div>

          <div className={`container `}>
            <div className={`d-flex flex-column `}>
              <p className={headingStyles.smallpara}>
                If you need a Fire Marshal for a night club, a product launch,
                or a 24 hour watch on a high rise, Red Fire Safety can help. Our
                Fire Marshal services have been utilized at a variety of large
                sporting events, TV studios, festivals, product launches, and
                even night clubs over the years.{' '}
              </p>
              <p className={headingStyles.smallpara}>
                Some of our high profile events have included product launches
                in London&apos;s west end with indoor and outdoor sporting
                events such as the London 2012 Olympics.{' '}
                Our Fire Marshals can be supplied in our standard branded
                workwear or we can ensure they are dressed formally and
                discreetly for high profile events.{' '}
              </p>
              <p className={headingStyles.smallpara}>
                We pride ourselves on only supplying Fire Marshalls alongside
                serving Firefighters, which gives our clients that extra peace
                of mind. As professionals, our staff react calmly and
                proactively to highly stressful situations. They are experienced
                in evacuations, roll calls, and, of course, attempt to put out
                fires.{' '}
              </p>
            </div>
          </div>
          <div className=''>
            <Featurebox
              secHeading=''
              pHeading=''
              paras={['Event fire marshals offer the following benefits:']}
              points={[
                'A responsible person to ensure all escape routes and exits are clear. ',
                'Ensuring all firefighting equipment and alarm systems are in working order. ',
                'Identifying hazards and reporting findings to rectify the hazard during watch or as soon and practicably possible.  ',
                'Dedicated responsible person to investigate any alarm actuation and initiate the evacuation of the premises if required. ',
                'Will attempt to extinguish any fire situation if safe to do so. ',
                'Carry out a roll call at the assembly point to ensure all persons are accounted for.  ',
                'Main point of contact for the fire & emergency services.  ',
              ]}
              image='/Images/fire-marshall.jpeg'
            />
          </div>

          <div className='d-flex flex-md-row flex-column gap-3 mt-4 container justify-content-between'>
            <img src="/Images/night watch (1).jpeg" alt="nightwatch1" className="img-fluid" width={430} />
            <img src="/Images/night watch (2).jpeg" alt="nightwatch1" className="img-fluid" width={430} />
          </div>

          <div className={` pt-3 container  `}>
            <h1 className={headingStyles.secHeading}>
              What to Expect from Red Fire Safety
            </h1>
            <p className={headingStyles.smallpara}>
              We offer Fire Marshall and Fire Watch services for your business
              to ensure your business is adequately protected against fire
              risks. We can provide you with one or several dedicated officers
              to ensure your business is protected against fire risks. In order
              to properly perform fire watch and marshall duties, our fire watch
              officers are properly trained, highly experienced, and possess the
              necessary expertise.{' '}
            </p>
          </div>
          <div className=' container '>
            <p style={{ fontSize: '14px' }}>
              Find out more about our Fire Marshall or Fire Watch Services by
              giving us a call on{' '}
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

export default NightWatch;
