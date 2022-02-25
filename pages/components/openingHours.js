import style from '../../styles/Home.module.css'

function OpeningHours(props) {
    return <section id='Hours' className={style.OpeningHours}>
        <h1>Opening Hours</h1>
        <section>
                <article>
                        <h3>Tuesday - Thursday</h3>
                        <p>10am to 18pm</p>
                </article>
                <article>
                        <h3>Sunday</h3>
                        <p>10am to 18pm</p>
                </article>
        </section>
    </section>
}

export default OpeningHours;