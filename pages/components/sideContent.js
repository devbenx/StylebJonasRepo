import style from '../../styles/Home.module.css'

export default function SideContent(props) {

return (
        <section className={style.SideContent}>
                <section style={{ width: props.mainComponentWidth, opacity: 0.9 - (props.scrollY / props.containerHeight) * 1.1 }} className={style.ScrollDown} >
                        <h3>SCROLL DOWN</h3>
                        <div className={style.line}></div>
                </section>
                <section style={{ width: props.mainComponentWidth, opacity: 0.9 - (props.scrollY / props.containerHeight) * 1.1}} className={style.SideSocials}>
                        <h3>FOLLOW MY WORK</h3>
                        <div className={style.line}></div>
                        <div className={style.SideSocialItem}></div>
                        <div className={style.SideSocialItem}></div>
                </section>
        </section>
)}

// {props.mainWidth} + {props.mainComponentWidth}