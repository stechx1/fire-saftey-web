import React from 'react'
import Anniversary from '../../components/Anniversary'
import Featurebox from '../../components/Featurebox'
import Form from '../../components/Form'
import styles from './Feature.module.css'
const FireAlarmServices = () => {

  return (
    <>
      <div className={`${styles.main} d-flex container-lg`}>
        <div className={`w-100`}>
          <div className={` pt-1 container `}>
            <h1 className={styles.pHeading}>Fire Alarm Servicing, Installation, Design & Maintenance</h1>
            <img src="/Images/fire-alarm-services.jpeg" alt="fireAlarm" className="img-fluid mb-4" />
          </div>


          <div className={`container `}>
            <div className={`d-flex flex-column `}>
              <p className={styles.smallpara}>In order to ensure fire safety, fire alarms must be maintained. Preventing fire is the most important aspect of fire protection. The automatic fire detection system you choose should, however, enable you to detect and manage a fire as soon as it breaks out at your premises, in order to help you manage the developing emergency situation as soon as possible. As a result, people may be able to evacuate your premises safely. </p>
              <p className={styles.smallpara}>To comply with current legal requirements, fire detection systems and devices need to be routinely serviced and maintained by a competent company. For fire alarms to be effective in saving lives and property, they must be maintained regularly. Maintaining systems regularly will ensure they operate correctly and can prevent costly repairs in the future. Our engineers have extensive experience installing and maintaining fire alarm systems. </p>
            </div>
          </div>


          <div className="">
            <Featurebox secHeading="Maintenance" pHeading="" paras={['FIA/FPA-certified and FIA/FPA-trained, Red Fire Safety provides a reliable, timely and friendly service for every job without compromising on quality. You can also take advantage of additional services, like weekly fire alarm testing, while receiving a free no-obligation consultation.', 'Every one of our maintenance packages is custom-designed to suit your business or property needs; we will listen to your requirements and provide you with industry-leading service, unparalleled by any other. ']} points={[]} image="/Images/iStock-183893662.jpeg" />
          </div>

          <div className="pt-1">
            <Featurebox secHeading="Out of Hours " reverse={true} pHeading="" paras={['Our maintenance contracts provide an out-of-hours callout service that operates 365 days a year, 24 hours a day. With the help of our helpful and experienced engineers, you will always have access to emergency repairs, support or advice whenever you need it.', '']} points={[]} image="/Images/FeatureBox/Rectangle 2.png" />
          </div>

          <div className="pt-1 container" >
            <p style={{ fontSize: '14px', margin: '0px' }}>Find out more about the preventative maintenance servicing and call out services we provide by giving us a call on <span style={{ color: '#C32128', fontWeight: 'bold' }}>01689 493 641</span> or email <span style={{ color: '#C32128', fontWeight: 'bold' }}>info@redfiresafety.com</span> today.</p>
          </div>


        </div>
        <div className={styles.form}>
          <Form />
        </div>

      </div>
      <div className="pt-1">
        <Anniversary />

      </div>

    </>
  )
}

export default FireAlarmServices