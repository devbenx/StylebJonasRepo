import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

// Components
import MainSection from './components/mainSection'
import ContentLayout from './components/contentLayout'
import Services from './components/services'
import OpeningHours from './components/openingHours'
import Reviews from './components/reviews'
import Portfolio from './components/portfolio'
import Promotions from './components/promotions'
import SideContent from './components/sideContent'
import NavigationBar from './components/navigationBar'
import Footer from './components/footer'

// React
import React, { useState, useEffect, useRef } from 'react';

export default function Home( props ) {
  const [mainComponentWidth, setMainComponentWidth] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const [containerHeight, setContainerHeight] = useState(0)
  const containerRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY + 1);
      setContainerHeight(containerRef.current.offsetHeight);
    };
    handleScroll();
    console.log("mainComponentWidth: "+mainComponentWidth);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY, mainComponentWidth]);


  return (
    <div ref={containerRef} className={styles.container}>
      <NavigationBar />
      <SideContent scrollY={scrollY} containerHeight={containerHeight} mainComponentWidth={mainComponentWidth}></SideContent>
      <MainSection setMainComponentWidthChanger={setMainComponentWidth}>
        <section className={styles.HomeMainSection}>
          <article className={styles.GifHomeMainSection}></article>
          <article className={styles.IntroSpeechHomeMainSection}>
            <section className={styles.IntroSpeechHomeMainSectionTitle}>
              <h3>Hair Stylist &</h3>
              <h3>Color Specialist</h3>
            </section>
            <p>Hairdressing is not just about cutting and coloring your hair. I have a passion for hairstyling and the artistry that comes with it.</p>
            <section className={styles.IntroSpeechHomeMainSectionActions}>
              <Link href="/contact"><a>Make an Appointment</a></Link>
              <Link href="/contact"><a>Check my work</a></Link>
            </section>
          </article>
        </section>
      </MainSection>
      <ContentLayout className={styles.ContentLayout}>
        <Services></Services>
        <OpeningHours></OpeningHours>
        <Reviews></Reviews>
        <Portfolio></Portfolio>
        <Promotions></Promotions>
      </ContentLayout>
      <Footer />
    </div>
  )
}
