import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';
const FireStopping = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-2 container `}>
            <h1 className={headingStyles.pHeading}>
              Fire Stopping & Compartmentation Survey{' '}
            </h1>
            <img src="/Images/firestopping.jpeg" alt="firestopping" className="img-fluid mb-4" />
          </div>

          <div className={`container `}>
            <h3 className={headingStyles.secHeading}>Fire Stopping Survey </h3>
            <p className={headingStyles.smallpara}>
              It is possible for a fire to spread rapidly throughout the
              structure of a building without the proper preventative measures
              being taken, putting many lives at risk. It may be possible to
              prevent an unfortunate fire outbreak by getting a fire stopping
              survey from Red Fire Safety.{' '}
            </p>
          </div>

          <div className=' container '>
            <h1 className={`${headingStyles.secHeading}`}>
              What Is Fire Stopping?{' '}
            </h1>
            <p className={headingStyles.smallpara}>
              Fire stopping involves sealing openings to prevent a fire from
              passing through multiple compartments of a building. The walls and
              floors of a fire compartment are constructed from fire-resistant
              materials.{' '}
            </p>
            <p className={headingStyles.smallpara}>
              In order to maintain the integrity of a fire-resistant structure,
              openings and gaps must be sealed to prevent fire spread.
            </p>
          </div>
          <div >
            <Featurebox
              reverse={true}
              secHeading=''
              pHeading=''
              paras={[
                'Using a fire stopping survey, it will be possible to identify areas where fire resisting walls have been breached in order to conduct the necessary remedial measures to prevent fire and smoke from spreading. Any penetrations in the fire resisting barriers throughout should be fire-stopped using the approved products in the correct applications. It is also vital to ensure the fire resisting element is maintained above fire doors. ',
                'We can identify the problem areas, and perform a detailed inspection above suspended ceilings, loft spaces and between floors to ensure fire cannot extend through the building by means of traveling through void spaces. ',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>

          <div className={` d-flex flex-column  container`}>
            <h1 className={headingStyles.secHeading}>
              What is Fire Compartmentation?
            </h1>
            <p className={headingStyles.smallpara}>
              Fire compartments are parts of buildings consisting of one or more
              rooms, floors, or spaces that are designed and constructed to
              prevent fire from spreading from one area of a building to
              another. Different parts of a building can be compartmentalized by
              using compartmentation walls and floors. A vertical plane should
              run through the entire height of the compartmentation walls.
            </p>
            <p className={headingStyles.smallpara}>
              Compartmentation is the process of subdividing a building into a
              number of distinct fire compartments. In dividing a building into
              different sections, you prevent the spread of fire across the
              entire building.
            </p>
          </div>

          <div className='container'>
            <p className={headingStyles.smallpara}>
              Every building has or should have its own bespoke
              compartmentation, taking into account:{' '}
            </p>
            <p className={`${headingStyles.smallpara} m-0 my-1`}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              The fire load,
            </p>
            <p className={`${headingStyles.smallpara} m-0 my-1`}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              The various uses in the building,
            </p>
            <p className={`${headingStyles.smallpara} `}>
            <img src='/Images/Bullet.jpeg' alt='bullet' className='img-fluid pb-1' width={35} />{' '}
              The availability of fire suppression systems such as automatic
              sprinkler systems.
            </p>
          </div>

          <div className=' container '>
            <h1 className={headingStyles.secHeading}>
              What is a Fire Compartmentation Survey?{' '}
            </h1>
            <p className={headingStyles.smallpara}>
              In terms of protecting property and lives from fire hazards, fire
              compartmentation is one of the best and most effective methods.
              The ability to escape a building safely is one of the most
              important tools that companies have at their disposal to keep
              occupants safe. Unfortunately, it is also one of the most ignored.{' '}
            </p>
            <p className={headingStyles.smallpara}>
              The concept of compartmentation divides the interior of a building
              into smaller, manageable areas that prevent smoke and fire from
              spreading throughout the entire structure. Whether conducting
              non-intrusive or intrusive surveys, our experienced surveyors are
              skilled in both.{' '}
            </p>
            <p className={headingStyles.smallpara}>
              While a fire risk assessment covers some aspects of fire
              compartmentation, a fire compartmentation survey goes into greater
              detail. The purpose of a fire compartmentation survey is to
              evaluate the effectiveness of compartmentation measures in a
              building (such as fire dampers). It may be necessary to collect
              and analyze samples in some cases. The objective is to determine
              if the existing measures are appropriate under the current
              circumstances.{' '}
            </p>
            <p className={headingStyles.smallpara}>
              All components of the compartmentation survey are included in our
              comprehensive services, including floors, walls, walls voids,
              roofs, voids, basements, shafts, and risers. We provide a detailed
              assessment of your compartmentation measures in our report.{' '}
            </p>
          </div>
          <div className=''>
            <Featurebox
              secHeading=''
              pHeading=''
              paras={[
                'As part of our analysis, we recommend areas where you may be able to make improvements to enhance the safety of all occupants and your property. Furthermore, the improvements ensure that your business premises meet statutory requirements. ',
                'It is the responsibility of our surveyors to know about the following: ',
              ]}
              points={[
                'Fire stopping techniques, products and materials ',
                'Fire doors and the need to fire stop around door frames ',
                'Compartmentation required between floors and around risk areas ',
                'BS 476 and associated standards for fire resistance testing',
              ]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className='container pt-2'>
            <p style={{ fontSize: '16px', fontWeight: '600' }}>
              Our clients receive a professionally produced survey report that
              is easy to understand with a list of recommendations and should
              any question arise our expert team are always happy to assist.{' '}
            </p>
            <p style={{ fontSize: '14px', fontWeight: '600' }}>
              We can also provide quotations for remedial works if necessary.
            </p>
            <p style={{ fontSize: '14px' }}>
              Find out more about our Fire Stopping and Compartmentation Surveys
              by giving us a call on{' '}
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
      <div>
        <Anniversary />
      </div>
    </>
  );
};

export default FireStopping;
