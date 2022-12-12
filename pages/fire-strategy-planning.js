import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';

const FireStrategyPlanning = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-2 container `}>
            <h1 className={headingStyles.pHeading}>
              Fire Strategy Planning & Consultancy
            </h1>
            <img src="/Images/fire-strategy-planning.jpeg" alt="fireStrategy" className="img-fluid mb-4" />
          </div>

          <div className={`container `}>
            <div className={`d-flex flex-column `}>
              <p className={headingStyles.smallpara}>
                The purpose of a fire strategy is to give an overview of how
                fire can affect a building and a business. The document outlines
                fire safety objectives and measures that may be required if they
                become necessary.{' '}
                Typically, a fire safety strategy is developed during the design
                phase of a new or modified building and continues throughout the
                construction phase.{' '}
              </p>
              <p className={headingStyles.smallpara}>
                Our team at Red Fire Safety ensures a thorough understanding of
                the project aims and objectives to provide the most efficient,
                cost-effective design solutions in fire safety management.{' '}
              </p>
              <p className={headingStyles.smallpara}>
                Alternatively, a retrospective fire strategy can highlight and
                address shortcomings in a fire risk assessment by reviewing the
                existing fire safety provisions in an existing building. An
                organization&apos;s fire safety policy and operational
                requirements are taken into account when developing its fire
                strategy.{' '}
              </p>
            </div>
          </div>

          <div className=' container'>
            <h1 className={headingStyles.secHeading}>
              What will your fire strategy include?
            </h1>
            <p className={headingStyles.smallpara}>
              The fire strategy document will clearly outline the framework for
              fire safety within the building and demonstrate compliance with
              the fundamental objectives of the Building Regulations, and where
              necessary, the additional measures or changes that should be
              considered.{' '}
            </p>
          </div>
          <div className=''>
            <Featurebox
              secHeading=''
              pHeading=''
              paras={[
                'The fire strategy report includes consideration of, and address the provisions for:',
              ]}
              points={[
                'Means of warning occupants and means of safe and timely escape ',
                'The requirements and provisions for the ability of the construction to resist internal fire spread (compartmentation)',
                'Requirements and provisions for internal wall and floor linings in terms of their combustibility ',
                'The requirements and provision for the construction of external walls to ensure they adequately resist external fire spread ',
                'Access and facilities to aid the Fire and Rescue Services, such as provision and design of firefighting lifts and stairs, vehicle access and fire mains and hydrants and other fire safety equipment ',
              ]}
              image=''
            />
          </div>
          <div className={` pt-3 container `}>
            <h1 className={headingStyles.secHeading}>Fire Consultancy </h1>
            <p className={headingStyles.smallpara}>
              Fire consultancy may be required as the result of a fire risk
              assessment, a visit from the fire service or in order to resolve
              any fire safety issues identified such as an External Wall
              Assessment.
            </p>
          </div>
          <div className=' container '>
            <h1 className={` ${headingStyles.secHeading} `}>
              What are the benefits of having access to a Fire Consultant?{' '}
            </h1>
            <p className={headingStyles.smallpara}>
              Being able to call on one of our highly-qualified fire consultants
              enables our clients to make informed decisions on how best to
              manage risks from fire and ensure fire safety.
            </p>
            <p className={headingStyles.smallpara}>
              Expert fire safety guidance helps ensure legal compliance, reduces
              the likelihood of enforcement action by the fire service and
              assists greatly with the protection of lives, properties and
              reputation.
            </p>
          </div>

          <div
            className='container '
            style={{ paddingRight: '15%', fontSize: '14px' }}
          >
            <h1 className={` ${headingStyles.secHeading} `}>
              How can we help?{' '}
            </h1>
            <p>
              Red Fire Safety has a team of highly-experienced fire safety
              consultants and chartered surveyors who can provide advice and
              cost effective solutions on any fire safety- related issues.{' '}
            </p>
            <p>
              Our Fire consultancy services may include Fire Risk Assessments
              (FRA), guidance on Fire Safety Design on new or existing
              buildings, refurbishment projects, and provision of fire
              strategies to satisfy Building Regulations for instance.{' '}
            </p>
          </div>
          <div className='container '>
            <p style={{ fontSize: '14px' }}>
              To Find out more give us a call on{' '}
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

export default FireStrategyPlanning;
