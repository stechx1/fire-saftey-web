import React from 'react'
import styles from '../styles/Form.module.css'
const Form = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className="header">
          <h3 className={styles.secHeading}>Enquire Today</h3>
          <p>To receive a fully comprehensive quote for your business, simply answer the questions and complete the form below and we&apos;ll be in touch.</p>
        </div>

        <div className="form d-flex flex-column gap-3">

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="category">What category does your premises fall under?<span style={{color:'red'}}>*</span> </label>
            <select className={styles.input} name="category" id="category">
              <option value="none">Please Select</option>
              <option value="Office">Office</option>
              <option value="Warehouse">Warehouse</option>
              <option value="Retail Shop">Retail Shop</option>
              <option value="Residential HMO">Residential HMO</option>
              <option value="Hotel">Hotel</option>
              <option value="Restaurant or Takeaway">Restaurant or Takeaway</option>
              <option value="Pub or Bar">Pub or Bar</option>
              <option value="Church">Church</option>
              <option value="Sleeping Accommodation">Sleeping Accommodation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="floors">How many floors do your employees occupy in the building?<span style={{color:'red'}}>*</span></label>
            <select className={styles.input} name="floors" id="floors">
            <option value="none">Please Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="3 or more">3 or more</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="employees">How many employees work on your premises?<span style={{color:'red'}}>*</span></label>
            <select className={styles.input} name="employees" id="employees">
            <option value="none">Please Select</option>
              <option value="1-10">1-10</option>
              <option value="11-50">11-50</option>
              <option value="51-100">51-100</option>
              <option value="over 100">over 100</option>
            </select>
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="layout">If possible, please upload a layout of your premises here.</label>
            <input type="file" name="layout" id="layout" />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="fname">First name<span style={{color:'red'}}>*</span></label>
            <input className={styles.input} type="text" name="fname" id="fname" />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="lname">Last name<span style={{color:'red'}}>*</span></label>
            <input className={styles.input} type="text" name="lname" id="lname" />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="email">Email<span style={{color:'red'}}>*</span></label>
            <input className={styles.input} type="text" name="email" id="email" />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="Comapny">Company<span style={{color:'red'}}>*</span></label>
            <input className={styles.input} type="text" name="Company" id="Company" />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="postcode">Postcode<span style={{color:'red'}}>*</span></label>
            <input className={styles.input} type="number" name="postcode" id="postcode" />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor="phone">Phone number<span style={{color:'red'}}>*</span></label>
            <input className={styles.input} type="number" name="phone" id="phone" />
          </div>

          <div className='d-flex flex-column gap-2'>
            <label htmlFor="checl">Have you previously employed Red Fire Safety for a service or product?<span style={{color:'red'}}>*</span></label>
            <div className='d-flex gap-2 flex-column'>
              <div className='d-flex align-items-center gap-2'>
                <input type="radio" id="yes" name="already" value="No" />
                <label htmlFor="html">Yes</label>
              </div>
              <div className='d-flex align-items-center gap-2'>
                <input type="radio" id="no" name="already" value="Yes" />
                <label htmlFor="css">No</label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="">Please note we are in the UK and cannot provide these services to other countries.</label>
          </div>

          <div className='mx-auto'>
            <button className={styles.btn}>Submit</button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Form