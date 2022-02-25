import Head from 'next/head'
import styles from '../styles/Home.module.css'
import contactStyle from '../styles/Contact.module.css'

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
          <li><p>Preferred via WhatsApp (+31): </p><div className={contactStyle.ContactItem}></div></li>
          <li><p>Check my recent work at:</p><div className={contactStyle.ContactItem}></div></li>
          <li><p>Book me through:</p><div className={contactStyle.ContactItem}>Treatwell</div></li>
          <li><p>How to get here:</p><a className={contactStyle.ContactItem}>GoogleMaps</a></li>
          <li><p>Email: </p><p>studiobjonas@gmail.com</p></li>
        </ul>
        <p>You can contact me for hair appointments, emergency hours, private masterclasses, keratin treatments, etc. I prefer to contact using WhatsApp because we can agree directly on the type of treatment and time for the appointment.</p>
      </MainSection>
      <Footer />
    </div>
  )
}
