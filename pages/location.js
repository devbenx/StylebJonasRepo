import Head from 'next/head'
import styles from '../styles/Home.module.css'

// Components
import MainSection from './components/mainSection'
import NavigationBar from './components/navigationBar'
import Footer from './components/footer'
import { useState, useEffect, useRef } from 'react';


export default function Location() {
  const [mainWidth, setmainWidth] = useState(0);
  const [mainComponentWidth, setmainComponentWidth] = useState(0);

  return (
    <div className={styles.container}>
      <NavigationBar />
      <MainSection setmainWidth={setmainWidth} setmainComponentWidth={setmainComponentWidth}>
        <h1>Location Page</h1>
        <p>The salon studio is located in Bos en Lommer</p>
        <p>Check how to get here by google maps:</p>

      </MainSection>
      <Footer />
    </div>
  )
}