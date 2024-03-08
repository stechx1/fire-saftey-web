/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';

const Regulations = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-2 container `}>
            {/* <h1 className={headingStyles.pHeading}>Regulations</h1> */}
            <img
              src='/Images/regulations.jpeg'
              alt='regulations'
              className='img-fluid mb-3 mt-1'
            />
          </div>

          <div className={`container `}>
            <h1 className={` ${headingStyles.pHeading} `}>
              Fire Safety Legislation
            </h1>

            <div className=' container'>
              <Featurebox
                secHeading='Responsible Person:'
                pHeading=''
                paras={[]}
                image=''
                points={[
                  'Responsible person is the person ultimately responsible for fire safety in the premises.',
                  'Meaning of responsible person is explained in Article 3 of The Regulatory Reform (Fire Safety) Order 2005. In relation to a workplace the responsible person is the employer ( a person who has a control of the workplace).',
                  'In relation to any other premises the responsible person is the person who has a control of the premises such as managing agent or the building owner.',
                ]}
              />
            </div>

            <div className=' container'>
              <Featurebox
                secHeading=' What must the Responsible Person do?'
                pHeading=''
                paras={[]}
                image=''
                points={[
                  'The Responsible Person must comply with The Regulatory Reform (Fire Safety) Order 2005. The responsibilities of responsible person are explained in Article 4 of the Order.',
                  'The Responsible person must ensure that preventive and protective measures are in place to reduce the risk of fire in the premises and to keep people safe from fire.',
                  'The Responsible person must carry out a fire risk assessment or appoint a competent person to undertake a fire risk assessment for the premises.',
                  'The Responsible Person must provide clear and relevant information on the risks identified by a fire risk assessment.',
                  'The Responsible Person must provide appropriate information and training to employees about fire precautions in the workplace. All staff, including part-time staff, zero contract staff, security staff, cleaning staff and contractors should be trained and instructed on how to prevent fires occurring and what to do if there is a fire.',
                  'In multiple occupancy buildings , the responsible must collaborate with other responsible persons when implementing preventative and protective measures and exchange information relevant to the risks in their premises.',
                ]}
              />
            </div>
          </div>

          <div className={`container `}>
            {/* <h1 className={`${headingStyles.secHeading} `}>
              Fire Safety Act 2021 and Fire Safety (England) Regulations 2022
            </h1>

            <p className={`${headingStyles.smallpara} `}>
              The Fire Safety Act 2021 commenced on 16th of May 2022. The Act
              clarifies that responsible persons (RPs) for multi-occupied
              residential buildings must manage and reduce the risk of fire for
              the structure and external walls of the building, including
              cladding, balconies and windows, and entrance doors to individual
              flats that open into common parts. The Act applies to England and
              Wales.
            </p> */}

            <div className=' container'>
              <Featurebox
                secHeading='Fire Safety Act 2021 and Fire Safety (England) Regulations 2022'
                pHeading=''
                paras={[
                  'The Act explains that where a building contains 2 or more sets of domestic premises, the Fire Safety Order applies to:',
                  'The Fire Safety Act 2021 commenced on 16th of May 2022. The Act clarifies that responsible persons (RPs) for multi-occupied residential buildings must manage and reduce the risk of fire for the structure and external walls of the building, including cladding, balconies and windows, and entrance doors to individual flats that open into common parts. The Act applies to England and Wales.',
                ]}
                image=''
                points={[
                  'The building’s structure and external walls (including windows, balconies, cladding, insulation and fixings) and any common parts.',
                  'All doors between domestic premises and common parts such as flat entrance doors (or any other relevant door) ',
                  'In relation to any other premises the responsible person is the person who has a control of the premises such as managing agent or the building owner.',
                ]}
              />

              <Featurebox
                secHeading=''
                pHeading=''
                paras={[
                  'The Act provides greater clarity on where the Fire Safety Order applies in multi-occupied residential buildings. RPs must manage and reduce the risk of fire for:',
                ]}
                image=''
                points={[
                  'The structure and external walls of the building, including anything attached to the exterior of those walls, such as cladding, balconies and windows; and',
                  'Entrance doors to individual flats that open into common parts.',
                ]}
              />
            </div>

            <div className='container'>
              <div className='container'>
                <p className={`${headingStyles.smallpara}`}>
                  Responsible persons must review their fire risk assessments,
                  to ensure they take into account the clarifications outlined
                  in the Act. A fire risk assessment of buildings with two or
                  more sets of domestic premises must be updated to take into
                  account not only common parts of the building but also the
                  structure and external walls of the building including
                  anything attached to the exterior of those walls. A fire risk
                  assessment must include all entrance doors to individual flats
                  that open into common parts .
                </p>
              </div>
            </div>

            <Featurebox
              secHeading='What new Regulations mean for the Responsible Persons?'
              pHeading=''
              paras={[
                'As of 23rd of January 2023, responsible persons in multi-occupied residential buildings must take specific actions depending on the height of the building.',
              ]}
              image=''
              points={[
                'Some provisions apply regardless of height',
                'More are needed once a building reaches 11 meters.',
                'Further requirements are introduced when a building reaches 18 meters (or 7 storeys) or more.',
              ]}
            />
            <div className='container'>
              <img
                src='/Images/fire-saftey-act.jpeg'
                alt='fire-saftey-act'
                className='img-fluid mb-3 mt-1'
                width={600}
              />
              <p>
                Source:{' '}
                <Link
                  href={
                    'https://www.nationalfirechiefs.org.uk/Fire-Safety-Act-2021-and-Fire-Safety-England-Regulations-2022-FAQs'
                  }
                >
                  <a style={{ color: 'blue', textDecoration: 'underline' }}>
                    Fire Safety Act 2021 and Fire Safety (England) Regulations
                    2022: FAQs (nationalfirechiefs.org.uk)
                  </a>
                </Link>
              </p>

              <Featurebox
                secHeading=''
                pHeading=''
                paras={[
                  'In all multi-occupied residential buildings with two or more sets of domestic premises, responsible persons will be required to:',
                ]}
                image=''
                points={[
                  'Fire Safety Instructions: provide relevant fire safety instructions to their residents, which will include instructions on how to report a fire and any other instruction which sets out what a resident must do once a fire has occurred, based on the evacuation strategy for the building.',
                  'Fire Door Information: provide residents with information relating to the importance of fire doors in fire safety.',
                ]}
              />

              {/* <p className={`${headingStyles.smallpara}`}>
                In multi-occupied residential buildings of over 11 metres in
                height, responsible persons will be required to provide fire
                safety instructions and fire door information and additionally
                undertake annual checks of flat entrance doors and quarterly
                checks of all fire doors in the common parts.
              </p> */}

              <Featurebox
                secHeading=''
                pHeading=''
                paras={[
                  'In multi-occupied residential buildings of over 11 metres in height, responsible persons will be required to provide fire safety instructions and fire door information and additionally undertake annual checks of flat entrance doors and quarterly checks of all fire doors in the common parts.',
                  'In high-rise residential buildings (at least 18m or 7 storeys in height) , responsible person must  provide fire safety instructions and fire door information, undertake annual checks of flat entrance doors and quarterly checks of all fire doors in the common parts. Additionally the responsible person will be required to:',
                ]}
                image=''
                points={[
                  'Building Plans: provide their local Fire and Rescue Service with up-to-date electronic building floor plans and to place a hard copy of these plans, alongside a single page building plan which identifies key firefighting equipment, in a secure information box on site.',
                  'External Wall Systems: provide to their local Fire and Rescue Service information about the design and materials of a high-rise building’s external wall system and to inform the Fire and Rescue Service of any material changes to these walls. Also, they will be required to provide information in relation to the level of risk that the design and materials of the external wall structure gives rise to and any mitigating steps taken.',
                  'Lifts and other Key Fire-Fighting Equipment: undertake monthly checks on the operation of lifts intended for use by firefighters, and evacuation lifts in their building and check the functionality of other key pieces of firefighting equipment. They will also be required to report any defective lifts or equipment to their local Fire and Rescue Service as soon as possible after detection if the fault cannot be fixed within 24 hours, and to record the outcome of checks and make them available to residents.',
                  'Information Boxes: install and maintain a secure information box in their building. This box must contain the name and contact details of the Responsible Person and hard copies of the building floor plans.',
                  'Wayfinding Signage: to install signage visible in low light or smoky conditions that identifies flat and floor numbers in the stairwells of relevant buildings.',
                ]}
              />
              <p className={`container ${headingStyles.smallpara}`}>
                Please be aware , that new regulations will apply to existing
                buildings, and requirements for new buildings may be different.
              </p>
            </div>
          </div>

          <div className=' pt-3 container '>
            <div className='container'>
              <div className='container'>
                <h1 className={headingStyles.secHeading}>
                  Fire Safety Preparation and Training
                </h1>
                <p className={headingStyles.smallpara}>
                  To make sure that your business complies with fire safety
                  legislation. Red Fire Safety can carry out a fire risk
                  assessment to identify the potential risks and measures you
                  can put in place to ensure that you comply with the
                  legislation.{' '}
                </p>
                <div className=' pt-2'>
                  <p style={{ fontSize: '14px' }}>
                    To find out more give us a call on{' '}
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
            </div>
          </div>
        </div>
        <div className={headingStyles.form}>
          <Form />
        </div>
      </div>
      <div className='pt-2'>
        <Anniversary />
      </div>
    </>
  );
};

export default Regulations;
