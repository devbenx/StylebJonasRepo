import style from '../../styles/Home.module.css'
import Link from 'next/link'

function footer(props) {
    return <section className={style.Footer__}>
                <section className={style.Footer}>
                        <section className={style.FooterSpeech}>
                                <h1>STYLE B JONAS</h1>
                                <p>Can’t wait to welcome you into my studio where you can relax and enjoy your well-deserved treatment.</p>
                        </section>
                        <section className={style.SocialSection}>
                                <p>studiobjonas@gmail.com</p>
                                <section>
                                        <a className={style.instagram_link} href="//www.instagram.com/stylebjonas/?hl=en"></a>
                                        <a className={style.treatwell_link} href="https://www.treatwell.nl/en/place/stylebjonas/">Treatwell</a>
                                </section>
                                <Link href="https://www.google.com/maps/place/Willem+de+Zwijgerlaan+334,+1055+RD+Amsterdam/@52.3809062,4.8586035,17z/data=!3m1!4b1!4m5!3m4!1s0x47c5e27a571b7c43:0x1b6ba83a187d0fe0!8m2!3d52.3809062!4d4.8607922"><a className={style.mapsLink}>Location</a></Link>
                        </section>
                </section>
                <p className={style.Copyright}>©Copyright 2022 StyleBjonas. All Rights Reserved. Site by Benjamin.</p>
        </section>
}

export default footer;