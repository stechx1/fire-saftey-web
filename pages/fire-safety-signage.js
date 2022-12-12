import React from 'react';
import Anniversary from '../components/Anniversary';
import Featurebox from '../components/Featurebox';
import Form from '../components/Form';
import headingStyles from './features/Feature.module.css';

const FireSafetySignage = () => {
  return (
    <>
      <div className={`${headingStyles.main} d-flex container-lg`}>
        <div className='w-100'>
          <div className={` pt-1 container `}>
            <h1 className={headingStyles.pHeading}>Fire Safety Signage</h1>
            <div className={`${headingStyles.heightedImage} mb-4`} style={{backgroundImage:'url(/Images/fire-safety-sinage.jpeg)', backgroundPosition:'center', backgroundRepeat:'no-repeat',  backgroundSize:'cover'}} > 

            </div>
          </div>

          <div className={`container `}>
            <h1 className={` ${headingStyles.secHeading} my-1`}>
              The Law and Their Meaning{' '}
            </h1>
            <p className={headingStyles.smallpara}>
              We all recognize Fire Safety Signs: a green stick man running
              through a door, a white hand pressing an alarm, a blue fire action
              checklist. In spite of the fact that we are surrounded by them
              every day, how well do we know what they mean?{' '}
            </p>
            <p className={headingStyles.smallpara}>
              And, for owners and managers of commercial, HMO and industrial
              properties, are you aware of the regulations governing safety
              signs and, as such, which signs are required in your environment?{' '}
            </p>
            <p className={headingStyles.smallpara}>
              The Health and Safety (Safety Signs and Signals) Regulations 1996
              define a fire safety sign as an illuminated sign or acoustic
              signal that provides information on escape routes and emergency
              exits; provides information on the identification or location of
              fire fighting equipment or gives warning in case of fire.{' '}
            </p>
          </div>

          <div className='container'>
            <p className={headingStyles.smallpara}>
              According to British and International standards, fire safety
              signs can be categorised into 8 main groups:
            </p>
          </div>

          <div className=''>
            <Featurebox
              secHeading='1. Escape route location signs '
              pHeading=''
              paras={[
                'Escape route location signs are signs that identify the direction of travel to escape or exit a building. They indicate doorways and openings that will lead you to a place of safety, in order to make an evacuation as quick, simple and efficient as possible.',
                'These signs are green in colour that, as a general rule for all fire safety signage, symbolises emergency escape, first aid and no danger.',
              ]}
              points={[]}
              image='/Images/escape-route.jpg'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='2. Emergency exit and emergency door release signs '
              pHeading=''
              paras={[
                'Doors featuring security devices, such as push to release opening mechanisms and sliding mechanisms, and also doors which are specifically used for emergency escape, should all use safety signs to demonstrate their opening instructions. ',
                'Again in green, to demonstrate emergency escape and no danger, they have been developed to reduce evacuation time and make the process as safe and straightforward as possible. ',
              ]}
              reverse={true}
              points={[]}
              image='/Images/emergency ligtning page.jpeg'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='3. Safe condition signs  '
              pHeading=''
              paras={[
                'Safe condition signs come under the Standard BS 5499 and are used to clearly mark and distinguish first aid equipment and its location, as well as emergency instructions for people with special needs.  Examples of safe condition signs include the well-known first aid sign and also more specific signs, such as emergency eye wash.',
                'These signs are green to demonstrate first aid and no danger and should be prominently displayed for optimum safety. ',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='4. Mandatory signs '
              pHeading=''
              paras={[
                "Mandatory notices have been created to help prevent the spread of fire and give occupants of the building fire safety instructions, such as 'Fire Door Keep Shut' and ‘Fire Escape Keep Clear’. ",
                'Mandatory signs are usually blue and white, which symbolises a specific behaviour or action that is required by the reader. They should be placed in an obvious position on both sides of the door. ',
              ]}
              reverse={true}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='5. Fire action signs '
              pHeading=''
              paras={[
                'It is a legal requirement, under the Regulatory Reform (Fire Safety) Order 2005, that all occupants of a building must be informed of fire safety instructions, and a good solution to this is fitting fire action signs within it. These signs include fire action charts and fire safety instructions and they provide safety information and instructions on what to do in a fire.',
                'These signs are usually blue and white, to demonstrate an instruction or required action, and also normally feature red too which symbolises danger, prohibition or an evacuation process.',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='6. Fire alarm and fire fighting equipment signs  '
              pHeading=''
              paras={[
                'Health and safety legislation states that all fire safety equipment requiring manual operation should be easy to access, simple to use and indicated by appropriate signage. If you own or manage a commercial or multi-residency environment, you can meet these legal requirements by installing red fire fighting signs near the equipment to identify their purpose and instruct their use.',
                'It is also highly recommended to display signs detailing fire extinguisher types and what they can and cannot be used for in order to significantly reduce the inappropriate use of extinguishers. ',
              ]}
              reverse={true}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='7. Hazardous materials and atmospheres signs '
              pHeading=''
              paras={[
                'Hazard warnings are specifically used to warn people to be careful or take precautions in high risk areas. Unless deemed unnecessary by a risk assessment, they are required by law in all commercial and multi-residential environments and are particularly common in industrial buildings where flammable materials and explosive substances are found.',
                'The JALITE AAA hazard warning signs have been designed in accordance with both British and International Standards in mind and are yellow to signify a warning.',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
            />
          </div>
          <div className=''>
            <Featurebox
              secHeading='8. Prohibition Signs '
              pHeading=''
              paras={[
                'Prohibition signs are designed to inform occupants of a building of inappropriate behaviours which may cause a risk or fire hazard. These signs include things such as ‘smoking strictly forbidden’ and ‘authorised personnel only’.',
                'The JALITE AAA prohibition signs are red in colour and are designed to comply with both British and International Standards. They are a great solution to fire safety legislation, which states that, after a hazard has been found, measures should be taken to inform occupants and control the risk.',
              ]}
              points={[]}
              image='/Images/FeatureBox/Rectangle 2.png'
              reverse={true}
            />
          </div>
          <div
            className=' container '
            style={{ paddingRight: '15%', fontSize: '14px' }}
          >
            <h1 className={headingStyles.secHeading}>
              Legal Duties and Obligations{' '}
            </h1>
            <p className={headingStyles.smallpara}>
              Unless the risk is not significant or the use of a sign would not
              reduce it, employers are required to provide specific safety signs
              wherever there is a risk or hazard that cannot be avoided or
              controlled by other means.{' '}
            </p>
            <p className={headingStyles.smallpara}>
              Safety signs must meet specific, stringent requirements, including
              shape, colour, and size. Each safety sign must include a symbol or
              pictogram that clearly defines its meaning, according to one of
              the main regulations. Signs with only text are not permitted. Text
              can be used to aid understanding.
            </p>
            <p className={headingStyles.smallpara}>
              When signs are used, the ‘responsible person’ – as defined in the
              Regulatory Reform (Fire Safety) Order 2005 – must ensure they are
              well maintained, with any faded or defective signs being replaced.
              They should also explain the signs to people who work within the
              building, making sure they understand the meaning and actions to
              be taken in correspondence with them.
            </p>
            <p className={headingStyles.smallpara}>
              Red Fire offers a professional, reliable service, supplying an
              extensive range of fire signage, ensuring you comply with all your
              legal requirements and contractual obligations, and can even fit
              them for you too.{' '}
            </p>
          </div>
          <div className='container'>
            <p style={{ fontSize: '14px' }}>
              Find out more about our Fire Signage Assessments by giving us a
              call on{' '}
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

export default FireSafetySignage;
