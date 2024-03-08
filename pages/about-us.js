/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Featurebox from '../components/Featurebox';
import styles from '../styles/About.module.css';
import Anniversary from '../components/Anniversary';

const AboutUs = () => {
  return (
    <>
      <div className={`container ${styles.mainContainer} `}>
        <div className={` d-flex flex-column px-3 pt-4 align-items-center `}>
          <img
            src='/Images/about us.jpeg'
            width={500}
            alt='about'
            className='img-fluid mb-4'
          />
          <div className={` `}>
            <p className={styles.smallpara}>
              Based in London, Red Fire Safety Company is a leading supplier in
              the design, installation, commissioning, servicing and routine
              maintenance of fire, products, accessories and systems.
            </p>
            <p className={styles.smallpara}>
              We are passionate about fire safety. Our goal is to share our
              collective years of experience gained from working in the UK Fire
              & Rescue Service. We pride ourselves in choosing associates and
              consultants carefully. All partners will have an extensive
              knowledge of fire safety with a fire service background and are
              members of professionally recognised bodies . Our goal is to
              simplify fire safety language for your personal business needs. And
              then carry on with 'We hold BAFE……'
            </p>

            <p className={styles.smallpara}>
              We hold BAFE, ISO and Door Check accreditations as well as being
              members of the Fire Industry Association, Fire Protection
              Association and Federation of Small Businesses. Our engineers are
              industry approved and undertake regular refresher training & are
              constantly assessed to ensure we provide the best possible
              services.
            </p>
            <p className={styles.smallpara} style={{ marginBottom: '11px' }}>
              We have just over 18 years’ experience in the industry, and our
              dedicated team has built up a trusting customer base with our
              progressive commitment to quality and service levels. Our
              customers are referred to as ‘partners’ as we work to a strategy
              maintaining compliance levels across all disciplines.{' '}
            </p>
          </div>
        </div>
      </div>
      <div className='container'>
        <Featurebox
          secHeading='Quality Service'
          pHeading=''
          paras={[
            'We all at Red Fire Safety challenge processes to ensure that service levels remain industry leading and never underdeliver when it comes to customer service quality. Thanks to our many years of experience and genuine dedication to the industry, you can be assured of the very best when it comes to fire protection',
            '',
          ]}
          points={[]}
          image='/Images/quality-services.jpg'
        />
      </div>
      <div className='container'>
        <Featurebox
          secHeading='Products'
          pHeading=''
          paras={[
            "As a result of our partnerships with some of the industry's leading fire manufacturers, we are able to offer you the most innovative products and solutions. To name a few, Red Fire Safety installs and maintains equipment from the following suppliers:",
            '',
          ]}
          image='/Images/FeatureBox/Rectangle 2.png'
          reverse={true}
          points={['Haes', 'Kentec', 'Hyfire', 'C-Tec']}
        />
      </div>
      <div className='pt-3 container'>
        <Featurebox
          secHeading='Maintainence'
          pHeading=''
          paras={[
            'Our preventative maintenance service aims to mitigate any faults or problems before they occur. All systems are regularly checked, and records are kept of all visits and work.',
            '',
          ]}
          image='/Images/iStock-183893662.jpeg'
          points={[]}
        />
      </div>
      <div className=' container'>
        <Featurebox
          secHeading='System'
          pHeading=''
          paras={[
            'Providing a multi-solution for both commercial and residential customers, our Planning & Scheduling system has transformed our job management and communication further to ensure our customers are kept informed throughout the process.',
            '',
          ]}
          image='/Images/iStock-930508614.jpeg'
          reverse={true}
          points={[]}
        />
      </div>
      <div className=' container'>
        <Featurebox
          secHeading='Accreditations & Memberships'
          pHeading=''
          paras={[
            'Red Fire Safety are proud to have the following accreditations: ',
            'ISO 9001 - The international standard that specifies requirements for a quality management system (QMS). Red Fire Safety demonstrates the ability to consistently provide products and services that meet customer and regulatory requirements.',
            'FIA MEMBERSHIP - Membership in the FIA is only available to companies with Third Party Certification (TPC). ',
            'FPA MEMBERSHIP - As a member, you can access an array of technical guidance, advice, and guidance whenever you need it, demonstrating your professional interest in fire safety. ',
            'BAFE - incorporates high quality standards and best working practices for services in the fire safety industry as part of a comprehensive competency framework.',
            'NAFDI - Certified by an association recognized by the industry. ',
          ]}
          image=''
          points={[]}
        />
      </div>

      <div className={` container d-flex flex-column px-4`}>
        <h1 className={`${styles.secHeading} pb-3`}>Support</h1>
        <p className={styles.smallpara}>
          In addition to supporting our customers&apos; sites and equipment
          24/7, we guarantee a response 24 hours a day, 7 days a week, 365 days
          a year
        </p>
        <p className={styles.smallpara}>
          Find out more about our company and our services by calling{' '}
          <span style={{ color: '#C32128', fontWeight: 'bold' }}>
            01689 493 641
          </span>{' '}
          or email{' '}
          <span style={{ color: '#C32128', fontWeight: 'bold' }}>
            info@redfiresafety.com
          </span>{' '}
          today
        </p>
      </div>

      <div className='pt-1'>
        <Anniversary />
      </div>
    </>
  );
};

export default AboutUs;
