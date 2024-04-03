import { useState } from 'react';
import styles from '../styles/Form.module.css';
const Form = () => {
  const [category, setCategory] = useState();
  const [noOfFloors, setNoOfFloors] = useState();
  const [noOfEmployees, setNoOfEmployees] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [Company, setCompany] = useState();
  const [postcode, setPostcode] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [previouslyEmployed, setPreviouslyEmployed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    console.log('Category: ', category);
    console.log('No Of Floors: ', noOfFloors);
    console.log('No of Employee: ', noOfEmployees);
    console.log('First Name: ', firstName);
    console.log('Last Name: ', lastName);
    console.log('Email', email);
    console.log('Company:', Company);
    console.log('Postcode:', postcode);
    console.log('Phone Number:', phoneNumber);
    console.log('Previously Employed:', previouslyEmployed);
    const data = {
      category,
      noOfFloors,
      noOfEmployees,
      firstName,
      lastName,
      email,
      Company,
      postcode,
      phoneNumber,
      previouslyEmployed,
    };
    console.log('Data: ', data);
    try {
      // Send data to API route (assuming the route is at '/api/send-email')
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // Set appropriate headers
        body: JSON.stringify(data), // Send data as JSON
      });

      if (!response.ok) {
        // Check for successful response
        throw new Error(`Error sending email: ${response.statusText}`);
      }

      const responseData = await response.json(); // Parse response data

      // Handle successful response (e.g., display a confirmation message)
      console.log('Email sent successfully!', responseData);
      alert('Your enquiry has been submitted successfully!'); // Or use a more user-friendly notification
    } catch (error) {
      // Handle errors (e.g., display an error message)
      console.error('Error sending email:', error);
      alert(
        'There was an error submitting your enquiry. Please try again later.'
      );
    }
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <div className='header'>
          <h3 className={styles.secHeading}>Enquire Today</h3>
          <p>
            To receive a fully comprehensive quote for your business, simply
            answer the questions and complete the form below and we&apos;ll be
            in touch.
          </p>
        </div>

        <div className='form d-flex flex-column gap-3'>
          <div className='d-flex flex-column gap-2'>
            <label htmlFor='category'>
              What category does your premises fall under?
              <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              className={styles.input}
              name='category'
              id='category'
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value='none'>Please Select</option>
              <option value='Office'>Office</option>
              <option value='Warehouse'>Warehouse</option>
              <option value='Retail Shop'>Retail Shop</option>
              <option value='Residential HMO'>Residential HMO</option>
              <option value='Hotel'>Hotel</option>
              <option value='Restaurant or Takeaway'>
                Restaurant or Takeaway
              </option>
              <option value='Pub or Bar'>Pub or Bar</option>
              <option value='Church'>Church</option>
              <option value='Sleeping Accommodation'>
                Sleeping Accommodation
              </option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className='d-flex flex-column gap-2'>
            <label htmlFor='floors'>
              How many floors do your employees occupy in the building?
              <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              className={styles.input}
              name='floors'
              id='floors'
              onChange={(e) => setNoOfFloors(e.target.value)}
            >
              <option value='none'>Please Select</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='3 or more'>3 or more</option>
              <option value='Other'>Other</option>
            </select>
          </div>

          <div className='d-flex flex-column gap-2'>
            <label htmlFor='employees'>
              How many employees work on your premises?
              <span style={{ color: 'red' }}>*</span>
            </label>
            <select
              className={styles.input}
              name='employees'
              id='employees'
              onChange={(e) => setNoOfEmployees(e.target.value)}
            >
              <option value='none'>Please Select</option>
              <option value='1-10'>1-10</option>
              <option value='11-50'>11-50</option>
              <option value='51-100'>51-100</option>
              <option value='over 100'>over 100</option>
            </select>
          </div>

          {/* <div className='d-flex flex-column gap-2'>
            <label htmlFor='layout'>
              If possible, please upload a layout of your premises here.
            </label>
            <input type='file' name='layout' id='layout' />
          </div> */}

          <div className='d-flex flex-column gap-2'>
            <label htmlFor='fname'>
              First name<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className={styles.input}
              type='text'
              name='fname'
              id='fname'
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>

          <div className='d-flex flex-column gap-2'>
            <label htmlFor='lname'>
              Last name<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className={styles.input}
              type='text'
              name='lname'
              id='lname'
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <div className='d-flex flex-column gap-2'>
            <label htmlFor='email'>
              Email<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className={styles.input}
              type='text'
              name='email'
              id='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor='Company'>
              Company<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className={styles.input}
              type='text'
              name='Company'
              id='Company'
              value={Company} // Display current value from state
              onChange={(e) => setCompany(e.target.value)} // Update state on change
            />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor='postcode'>
              Postcode<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className={styles.input}
              type='number'
              name='postcode'
              id='postcode'
              value={postcode}
              onChange={(e) => setPostcode(e.target.value)}
            />
          </div>

          <div className=' d-flex flex-column gap-2'>
            <label htmlFor='phone'>
              Phone number<span style={{ color: 'red' }}>*</span>
            </label>
            <input
              className={styles.input}
              type='number'
              name='phone'
              id='phone'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className='d-flex flex-column gap-2'>
            <label htmlFor='checl'>
              Have you previously employed Red Fire Safety for a service or
              product?<span style={{ color: 'red' }}>*</span>
            </label>
            <div className='d-flex gap-2 flex-column'>
              <div className='d-flex align-items-center gap-2'>
                <input
                  type='radio'
                  id='yes'
                  name='already'
                  value='Yes'
                  checked={previouslyEmployed} // Reflect state value
                  onChange={() => setPreviouslyEmployed(true)} // Update state
                />
                <label htmlFor='html'>Yes</label>
              </div>
              <div className='d-flex align-items-center gap-2'>
                <input
                  type='radio'
                  id='no'
                  name='already'
                  value='No'
                  checked={!previouslyEmployed} // Reflect state value
                  onChange={() => setPreviouslyEmployed(false)} // Update state
                />
                <label htmlFor='css'>No</label>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor=''>
              Please note we are in the UK and cannot provide these services to
              other countries.
            </label>
          </div>

          <div className='mx-auto'>
            <button onClick={handleSubmit} className={styles.btn}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
