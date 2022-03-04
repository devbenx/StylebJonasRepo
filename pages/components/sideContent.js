import style from '../../styles/Home.module.css'
import Link from 'next/link'

export default function SideContent(props) {

return (
        <section className={style.SideContent}>
                <section style={{ width: props.mainComponentWidth, opacity: 0.9 - (props.scrollY / props.containerHeight) * 1.1 }} className={style.ScrollDown} >
                        <h3>←</h3>
                        <div className={style.line}></div>
                </section>
                <section style={{ width: props.mainComponentWidth, opacity: 0.9 - (props.scrollY / props.containerHeight) * 1.1}} className={style.SideSocials}>
                        <h3>FOLLOW MY WORK</h3>
                        <div className={style.line}></div>
                        <Link href="//www.instagram.com/stylebjonas/?hl=en"><a><div className={style.SideSocialItemInstagram}></div></a></Link>
                        <Link href="//www.instagram.com/stylebjonas/?hl=en"><a><div className={style.SideSocialItemWhatsApp}></div></a></Link>
                </section>
        </section>
)}

// {props.mainWidth} + {props.mainComponentWidth}