import React from 'react'
import styles from '../pages/features/Feature.module.css'
import { useRouter } from 'next/router'
import Anniversary from '../components/Anniversary';

const SiteMap = () => {
    const router = useRouter();
    return (
        <>
            <div className="container pt-2 ">
                <h1 className={styles.pHeading}>Site Map</h1>
            </div>

            <div className={`container d-flex justify-content-between ${styles.siteMapMain}`}>
                <div className={`d-flex flex-column ${styles.siteLeft}`}>
                    <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/')}}>Home</p>
                    <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/fire-risk-assessments')}}>Risk Assessment</p>
                    <p style={{ color:'#C32128'}}>Services</p>
                    <div className='mx-4'>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/features/fire-alarm-services')}}>Fire Alarm Services</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/features/fire-door-inspection')}}>Fire Door Services</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/features/fire-extinguisher-services')}}>Fire Extinguisher Services</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/emergency-lighting-servicing')}}>Emergency Lightining Services</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/sprinkler-servicing')}}>Sprinkler Servicing</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/fire-stopping')}}>Fire Stopping</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/fire-strategy-planning')}}>Fire Strategy planning</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/night-watch-and-fire-marshall')}}>Night Watch and Fire Marshall</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/responsible-person-and-duties')}}>Responsible Person and their duties</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/wet-and-dry-risers')}}>Wet and Dry Risers</p>
                    </div>
                </div>
                <div className={`d-flex flex-column ${styles.siteRight}`}>
                    <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/basic-fire-safety')}}>Fire Training</p>
                    <p style={{cursor:'pointer', color:'#C32128'}} onClick={() => { router.push('/about-us') }}>About Us</p>
                    <p style={{cursor:'pointer', color:'#C32128'}} onClick={() => { router.push('/contact') }} >Contact</p>
                    <p style={{cursor:'pointer', color:'#C32128'}} onClick={() => { router.push('/evacuation-plans-and-drills')}}>Evaluation Plan</p>
                    <p style={{color:'#C32128'}}>Safety</p>
                    <div className='mx-4'>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/basic-fire-safety')}}>Basic Fire Safety</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/fire-safety-services')}}>Fire Safety Services</p>
                        <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/fire-safety-signage')}}>Fire Safety Signage</p>
                    </div>
                    <p style={{cursor:'pointer', color:'#C32128'}} onClick={()=>{router.push('/regulations')}}>Regulations</p>
                </div>
            </div>
            <div className='pt-1'>
        <Anniversary />
      </div>
        </>
    )
}

export default SiteMap