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
import { useState, useEffect, useRef } from 'react';



export default function Home() {

  const [mainWidth, setmainWidth] = useState(0);
  const [mainComponentWidth, setmainComponentWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY + 1);
      setContainerHeight(containerRef.current.offsetHeight);
    };
    // just trigger this so that the initial state 
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div ref={containerRef} className={styles.container}>
      <NavigationBar />
      <SideContent scrolly={scrollY} containerheight={containerHeight} mainwidth={mainWidth} maincomponentwidth={mainComponentWidth}></SideContent>
      <MainSection setmainwidth={setmainWidth} setmainComponentWidth={setmainComponentWidth}>
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
