import React from 'react'
import Anniversary from '../components/Anniversary'
import Featurebox from '../components/Featurebox'
import Form from '../components/Form'
import styles from '../styles/About.module.css'
import headingStyles from './features/Feature.module.css'

const ResponsiblePersonAndDuties = () => {
    return (
        <>

            <div className={`${headingStyles.main} d-flex container-lg`}>
                <div className='w-100'>

                    <div className={`container pt-2 `}>
                        <h1 className={` ${headingStyles.pHeading} `}>Responsible Person and Your Duties</h1>
                        <img src="/Images/Responsible Person.jpeg" alt="responsiblePerson" className="img-fluid mb-4" />
                        <p className={headingStyles.smallpara}>Businesses and charities that are not clearly domestic premises must conduct a fire risk assessment. It is the responsibility of the &apos;Responsible Person&apos; to address these issues.</p>
                        <p className={headingStyles.smallpara}>Those who control or have a degree of control over certain areas within a building are defined as Responsible Persons under the Fire Safety Order. Owners, employers, or occupiers may fall into this category.</p>
                    </div>

                    <div className="">
                        <Featurebox secHeading="The ‘responsible person’ is required to:" pHeading="" paras={[]} image="/Images/FeatureBox/Rectangle 2.png" points={['Carry out a Fire Risk Assessment', 'Provide and maintain general fire precautions to the extent that is appropriate', 'Monitor and review the Risk Assessment and revise as appropriate', 'Inform staff and/or their representative of the identified risks', 'Plan for an emergency', 'Provide staff information, instruction and training', 'Nominate persons to assist', 'Cooperate and coordinate with other ‘responsible persons’ in the building where necessary']} />
                    </div>
                    <div className="">
                        <Featurebox secHeading="Other areas for consideration" pHeading="" paras={[]} image="/Images/iStock-1097673712.jpeg"  points={['Means For Detecting & Giving Warning in case of fire', 'Means of Escape & Emergency Lighting', 'Fire Safety Signs', 'Firefighting Equipment', 'Prevention of false automatic fire alarms']} />
                    </div>

                    <div className={` pt-2 container d-flex flex-column gap-3 `}>

                        <span style={{ fontSize: '14px' }}>If some parts of the building are not under the employer&apos;s control, for example, if the workplace is shared with other people, the employer should be informed</span>
                        <span style={{ fontSize: '14px' }}>In the areas they control, the person who has control (landlord, owner, employer etc) or has the responsibility to ensure compliance with the Fire Safety Order may require communication and cooperation between all parties in order to ensure fire safety provisions, firefighting measures, evacuation procedures, etc</span>
                    </div>
                    <div className='pt-2'>
                        <Featurebox secHeading="Do you need help with your responsible person duties?" pHeading="" paras={['We provide weekly and monthly testing for all types of fire alarm and emergency lighting systems for all types of businesses. ', 'It is a requirement for all businesses with fire alarms or emergency lighting systems to test their systems regularly. Keeping your systems up-to-date and maintained by a competent person is a requirement to remain legally compliant.', "When you're responsible for a number of properties and have conflicting workloads, it can be difficult to ensure that periodic tests take place each week/month at the same time", 'Our engineers work across London and the Home counties, which makes it easy for us to schedule your checks into our route planner and in doing so keeping costs down. ']} points={[]} image="" />
                    </div>

                    <div className="container ">
                        <p className='fw-bold'>We carry BAFE accreditations, IS09001, hold FIA and FPA memberships and are members of the National <br /> Association of Fire Door Inspectors, so you can be sure that you are in safe hands</p>
                        <p style={{ fontSize: '14px' }}>Red Fire Safety is confident we can help you regardless of how many sites you manage</p>
                        <p style={{ fontSize: '14px' }}>Find out more on our company and our Weekly / Monthly attendance visits by calling <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
                    </div>

                </div>
                <div className={headingStyles.form}>
                    <Form />
                </div>
            </div>

            <div className="">
                <Anniversary />

            </div>
        </>
    )
}

export default ResponsiblePersonAndDuties