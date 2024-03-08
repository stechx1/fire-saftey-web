/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Image from 'next/image';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import styles from '../styles/Home.module.css';
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div
        className={`${styles.homeContainer}`}
        style={{ marginBottom: '2.5rem' }}
      >
        <h1 className={styles.primaryHeading}>
          Bespoke Fire Safety Solutions for your Business.
        </h1>
        <h1 className={styles.secHeading}>
          Consultancy, Fire Safety Training & Fire Risk Assessment.
        </h1>
        <span>
          {/* Consultancy, Fire Safety Training & Fire Risk Assessment. <br /> */}
          Your safety is our business
        </span>
        <button
          className={styles.primaryButton}
          onClick={() => {
            router.push('/fire-safety-services');
          }}
        >
          View Our Services
        </button>
      </div>

      <div className={`container pt-md-2 pt-3 ${styles.boxesContainer}`}>
        <div className='row'>
          <div className={`col-md-4 col-sm-12 px-xl-3 ${styles.box} `}>
            <div
              className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 ${styles.featureBoxContainer} `}
            >
              <img
                src='/Images/FeatureBox/Fire assessment 1White.png'
                alt='Fire1'
                className='img-fluid'
                style={{ width: '65px' }}
              />
              <span className={styles.servicesSpan}>
                Fire Door Inspection & <br /> Maintenance
              </span>
              {/* <span>View our Fire Fighting Equipment, Safety Signs, Fire Warden accessories and Evacuation Chairs.</span> */}
              <button
                onClick={() => {
                  router.push('/features/fire-door-inspection');
                }}
                className={styles.servicesButton}
              >
                View More
              </button>
            </div>
          </div>

          <div className={`col-md-4 col-sm-12 px-xl-3 ${styles.box} `}>
            <div
              className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 ${styles.featureBoxContainer} `}
            >
              <img
                src='/Images/FeatureBox/Fire Alaram servicing 1White.png'
                alt='Fire1'
                className='img-fluid'
                style={{ width: '100px', marginLeft: '16px' }}
              />
              <span className={styles.servicesSpan}>
                Fire Alarm Servicing, Installation, Design & Maintenance
              </span>
              {/* <span>Our range of services include: Fire Risk Assessment, Staff Fire Training, Surveys and free advice.</span> */}
              <button
                onClick={() => {
                  router.push('/features/fire-alarm-services');
                }}
                className={styles.servicesButton}
              >
                View More
              </button>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12 px-xl-3 ${styles.box} `}>
            <div
              className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 ${styles.featureBoxContainer} `}
            >
              <img
                src='/Images/fire-risk.svg'
                alt='Fire1'
                className='img-fluid'
                style={{ width: '100px' }}
              />
              <span className={styles.servicesSpan}>
                Fire Risk Assessment <br /> <br />
              </span>
              {/* <span>View our Fire Fighting Equipment, Safety Signs, Fire Warden accessories and Evacuation Chairs.</span> */}
              <button
                onClick={() => {
                  router.push('/fire-risk-assessments');
                }}
                className={styles.servicesButton}
              >
                View More
              </button>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12 px-xl-3 ${styles.box} `}>
            <div
              className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 ${styles.featureBoxContainer} `}
            >
              <img
                src='/Images/FeatureBox/Fire Extinguisher 1White.png'
                alt='Fire1'
                className='img-fluid'
                style={{ width: '48px' }}
              />
              <span className={styles.servicesSpan}>
                Fire Extinguisher Servicing & Maintenance
              </span>
              {/* <span>Your complete business-focused resource for all information and links to a wide range of Fire Safety issues.</span> */}
              <button
                onClick={() => {
                  router.push('/features/fire-extinguisher-services');
                }}
                className={styles.servicesButton}
              >
                View More
              </button>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12 px-xl-3 ${styles.box} `}>
            <div
              className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 ${styles.featureBoxContainer} `}
            >
              <img
                src='/SVGs/fire-strategy-white.svg'
                alt='Fire1'
                className='img-fluid'
                style={{ width: '75px' }}
              />
              <span className={styles.servicesSpan}>Fire Strategy</span>
              <button
                onClick={() => {
                  router.push('/fire-strategy-planning');
                }}
                className={styles.servicesButton}
              >
                View More
              </button>
            </div>
          </div>
          <div className={`col-md-4 col-sm-12 px-xl-3 ${styles.box} `}>
            <div
              className={`d-flex flex-column align-items-center justify-content-center text-center gap-2 ${styles.featureBoxContainer} `}
            >
              <img
                src='/SVGs/night-watch.svg'
                alt='Fire1'
                className='img-fluid'
                style={{ width: '80px' }}
              />
              <span className={styles.servicesSpan}>
                Night Watch and Fire Marshall
              </span>
              <button
                onClick={() => {
                  router.push('/night-watch-and-fire-marshall');
                }}
                className={styles.servicesButton}
              >
                View More
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=' text-center container px-5 '>
        <h3 className={` ${styles.secHeading} `}>
          Using our expertise and knowledge we strive to ensure that your
          business stay compliant with fire safety legislation. <br />
          <br />
          Our team is committed to provide tailored fire safety solutions to
          suit your business. This approach enables you to focus on maintaining
          and growing your business.
        </h3>
        <div className=''>
          <p className={styles.smallpara}>
            Red Fire Safety is an independent company based in London. Our
            business is based on a shared belief that long-term solutions are
            more important than short-term conveniences.
          </p>
          <p className={styles.smallpara}>
            Over time, we believe these qualities have earned Red Fire Safety a
            reputation for reliability, honesty, and integrity.
          </p>
        </div>
      </div>

      <div className={`pt-2 container d-flex ${styles.WhyContainer}`}>
        <div className={styles.Whyleft}>
          <img
            src='/Images/whyChoose-red.png'
            alt='why choose'
            className={`img-fluid ${styles.whyImage}`}
          />
        </div>
        <div className={styles.Whyright}>
          <p className={styles.smallpara}>
            Our Mission Statement is to provide bespoke fire safety solutions
            for owners of business in the UK. Our team have extensive knowledge,
            experience and skills in the fire safety sector. Stemming from over
            sixty years’ experience in the UK & Fire Rescue Service.
          </p>
          <p className={styles.smallpara}>
            As a team we are passionate about educating our clients and
            simplifying fire safety legislation, enabling them to focus on their
            business.
          </p>
          <p className={styles.smallpara}>
            Regardless of the business we strive to provide bespoke fire safety
            solutions and advice.
          </p>
          <p className={styles.smallpara}>
            When choosing to work with Red Fire Safety you can be confident in
            our ability to meet your personal requirements as one of our core
            values is a dedication to safety, competencies and compliance.
          </p>
          <p className={styles.smallpara}>
            We are fully accredited through industrial leading association, and
            affiliated to prestigious trade organisations.
          </p>
        </div>
      </div>

      <div>
        <Anniversary />
      </div>
    </>
  );
}
