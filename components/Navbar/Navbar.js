/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styles from './Navbar.module.css';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <div
        className={`${styles.navMain}`}
        style={{ backgroundColor: '#b1322f' }}
      >
        <div
          className={`container d-flex justify-content-between px-5 ${styles.navContainer}`}
        >
          <img
            src='/Images/logo.jpeg'
            alt='logo'
            className={`img-fluid  ${styles.logoImage}`}
            width={160}
          />
          <div
            style={{ justifyContent: 'center' }}
            className='d-md-flex flex-column d-none text-light'
          >
            <span>Call the team today</span>
            <span>Mon - Fri 9am - 5pm</span>
            <span>01689 493 641</span>
          </div>
        </div>
      </div>

      <nav
        className={`navbar navbar-expand-lg navbar-dark py-0 ${styles.mainContainer} `}
      >
        <div className='container-fluid'>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mx-auto mb-lg-0'>
              <li className='nav-item'>
                <a
                  className='nav-link text-light py-1 '
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                  onClick={() => {
                    router.push('/');
                  }}
                  aria-current='page'
                >
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link text-light py-1'
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                  onClick={() => {
                    router.push('/about-us');
                  }}
                >
                  About Us
                </a>
              </li>

              <li className='nav-item dropdown'>
                <a
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                  className='nav-link dropdown-toggle text-light py-1'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Pre-Planned Maintenance
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/features/fire-alarm-services');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/features/fire-alarm-services'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Alarms
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/features/fire-door-inspection');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/features/fire-door-inspection'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Doors
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/features/fire-extinguisher-services');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname ===
                          '/features/fire-extinguisher-services'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Extinguishers
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/emergency-lighting-servicing');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/emergency-lighting-servicing'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Emergency Lighting
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/sprinkler-servicing');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/sprinkler-servicing'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Sprinkler Systems
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  {/* <li><a onClick={() => { router.push('/fire-stopping') }} style={{ cursor: 'pointer', fontSize: '1rem', color:router.pathname === '/fire-stopping' ? 'black' : '#2e2e2e'  }} className="dropdown-item" >Fire Stopping</a></li>
                                    <li><hr className="dropdown-divider" /></li> */}

                  <li>
                    <a
                      onClick={() => {
                        router.push('/wet-and-dry-risers');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/wet-and-dry-risers'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Wet and Dry Risers
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                </ul>
              </li>
              <li className='nav-item dropdown'>
                <a
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                  className='nav-link dropdown-toggle text-light py-1'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Services
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/fire-stopping');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/fire-stopping'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Stopping & Compartmentation
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/fire-strategy-planning');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/fire-strategy-planning'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Strategy Planning & Consultancy
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/night-watch-and-fire-marshall');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/night-watch-and-fire-marshall'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Marshall & Night Watch Patrols
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  {/* <li><a onClick={() => { router.push('/emergency-lighting-servicing') }} style={{ cursor: 'pointer', fontSize: '1rem', color:router.pathname === '/emergency-lighting-servicing' ? 'black' : '#2e2e2e'  }} className="dropdown-item" >Emergency Lightining Services</a></li>
                                    <li><hr className="dropdown-divider" /></li> */}
                  <li>
                    <a
                      onClick={() => {
                        router.push('/responsible-person-and-duties');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/responsible-person-and-duties'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Responsible Persons Duties
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/fire-risk-assessments');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/fire-risk-assessments'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Risk Assessment
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/fire-safety-signage');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/fire-safety-signage'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Safety Signage
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>

                  <li>
                    <a
                      onClick={() => {
                        router.push('/fire-safety-services');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/fire-safety-services'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Fire Safety Services
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/evacuation-plans-and-drills');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/evacuation-plans-and-drills'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Evacuation Plan
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link text-light py-1'
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                  onClick={() => {
                    router.push('/regulations');
                  }}
                >
                  Fire Safety Legislation
                </a>
              </li>
              <li className='nav-item dropdown'>
                <a
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                  className='nav-link dropdown-toggle text-light py-1'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Fire Safety Training
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a
                      onClick={() => {
                        router.push('/basic-fire-safety');
                      }}
                      style={{
                        cursor: 'pointer',
                        fontSize: '1rem',
                        color:
                          router.pathname === '/basic-fire-safety'
                            ? 'black'
                            : '#2e2e2e',
                      }}
                      className='dropdown-item'
                    >
                      Basic Fire Safety & Warden Training
                    </a>
                  </li>
                  {/* <li><hr className="dropdown-divider" /></li> */}
                </ul>
              </li>

              <li className='nav-item'>
                <a
                  className='nav-link text-light py-1'
                  style={{ cursor: 'pointer', fontSize: '1rem' }}
                  onClick={() => {
                    router.push('/contact');
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
