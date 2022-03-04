import Head from 'next/head'
import styles from '../styles/Home.module.css'
import contactStyle from '../styles/Contact.module.css'
import Link from 'next/link'

// Components
import MainSection from './components/mainSection'
import NavigationBar from './components/navigationBar'
import Footer from './components/footer'
import { useState, useEffect, useRef } from 'react';


export default function Contact() {
  const [mainWidth, setmainWidth] = useState(0);
  const [mainComponentWidth, setmainComponentWidth] = useState(0);

  return (
    <div className={styles.container}>
      <NavigationBar />
      <MainSection className={contactStyle.MainSection} setmainWidth={setmainWidth} setmainComponentWidth={setmainComponentWidth}>
        <h1>Make an Appointment</h1>
        <ul>
          
          <li><p>Preferred via WhatsApp (+31 627587343): </p><Link href="https://api.whatsapp.com/send?phone=31627587343&text=Hi%20Jonas!%20I%20would%20love%20to%20schedule%20an%20appointment!"><a><div className={contactStyle.ContactItem}></div></a></Link></li>
          <li><p>Check my recent work at:</p><Link href="//www.instagram.com/stylebjonas/?hl=en"><a><div className={contactStyle.ContactItem}></div></a></Link></li>
          <li><p>Book me through:</p><Link href="https://www.treatwell.nl/en/place/stylebjonas/"><a><div className={contactStyle.ContactItem}>Treatwell</div></a></Link></li>
          <li><p>How to get here:</p><Link href="https://www.google.com/maps/place/Willem+de+Zwijgerlaan+334,+1055+RD+Amsterdam/@52.3809062,4.8586035,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5e27a571b7c43:0x1b6ba83a187d0fe0!8m2!3d52.3809062!4d4.8607922"><a className={contactStyle.ContactItem}>GoogleMaps</a></Link></li>
          <li><p>Email: </p><p>studiobjonas@gmail.com</p></li>
        </ul>
        <p>You can contact me for hair appointments, emergency hours, private masterclasses, keratin treatments, etc. I prefer to contact using WhatsApp because we can agree directly on the type of treatment and time for the appointment.
            If you come by car, there is a parking for 1,50€/hour</p>
      </MainSection>
      <Footer />
    </div>
  )
}
