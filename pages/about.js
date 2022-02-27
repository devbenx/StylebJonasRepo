import styles from '../styles/Home.module.css'
import about from '../styles/About.module.css'

// Components
import MainSection from './components/mainSection'
import NavigationBar from './components/navigationBar'
import Footer from './components/footer'

// Import Swiper React components
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import { useState } from 'react';
import Link from 'next/link'

export default function About() {
  // const [mainWidth, setmainWidth] = useState(0);
  // const [mainComponentWidth, setmainComponentWidth] = useState(0);

  return (
    <div className={styles.container}>
      <NavigationBar />
      <MainSection className={styles.MainSection}>
        <section className={about.AboutLayout}>
          <section className={about.Aboutme}>
                  <article className={about.presentation_card}>
                    <div className={about.presentation_img}></div>
                    <h3>Jonas Bedoya</h3>
                    <p>Colorist & Hair Stylist</p>
                    <p>+15 years of experience</p>
                  </article>
                  <article className={about.readmore}>
                    <h3>Your Local Hairdresser</h3>
                    <p>15 years ago I started my journey in the hair and beauty industry in the city of Barcelona and,
                        for the last 3 years I have been working in Amsterdam.</p>
                    <p>Hairdressing is not just about cutting and coloring your hair. I have a passion for hairstyling
                        and the artistry that comes with it.</p>
                    <p>What makes my clients comfortable is my passion, dedication, hard work and ability to customize
                        your salon experience to fit your needs.</p>
                    <p>An essential part of my job is the consultation where I establish what my clients want, during my
                        treatment.</p>
                  </article>
          </section>
          <section className={about.StudioSalon}>
            <Swiper
              modules={[ Pagination, A11y, EffectFade]}
              effect="fade"
              spaceBetween={50}
              slidesPerView={1}
              loop={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide><img src="/img/swiper/salon1.jpg" alt="salon"/></SwiperSlide>
              <SwiperSlide><img src="/img/swiper/salon2.jpg" alt="salon"/></SwiperSlide>
              <SwiperSlide><img src="/img/swiper/salon3.jpg" alt="salon"/></SwiperSlide>
              <SwiperSlide><img src="/img/swiper/salon4.jpg" alt="salon"/></SwiperSlide>
              <SwiperSlide><img src="/img/swiper/salon5.jpg" alt="salon"/></SwiperSlide>
            </Swiper>
            <article className={about.PrivateStudio}>
                        <h3>Private Studio</h3>
                        <p>At the salon you can expect a private space where you are the center of attention. A calm and
                            relaxing ambient that create a unique experience. A drink of your choice.</p>
            </article>
          </section>
          <section className={about.SustainableBeauty}>
            <h1>Sustainable beauty</h1>
            <section className={about.SustainableBeautyItems}>
              <p>During my treatment I use <Link href="/contact"><a>Davines</a></Link> line of products that will make your hair stronger, adding volume and sleekness. My priority during my sevices is taking care of the prodcuts that I use to minimize damage to the folicule, that is why I partnered with Davines, the best line of products, that no only takes care of the planet but also gives good quality.</p>
              <div className={about.SustainableBeautyItem}></div>
              <div className={about.SustainableBeautyItem}></div>
            </section> 
          </section>
        </section>
      </MainSection>
      <Footer />
    </div>
  )
}