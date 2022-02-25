import style from '../../styles/Home.module.css'

function Promotions(props) {
        return <section className={style.Promotions}>
                <h1>Season promotions</h1>
                <section className={style.promotions_cards_wrapper}>
                        <div className={style.promotions_card}>
                                <div className={style.promotions_card_img}></div>
                                <article>
                                        <h3>Winter Special</h3>
                                        <p>Includes: Haircut, Mini facial & Scalp massage</p>
                                </article>
                        </div>
                        <div className={style.promotions_card}>
                                <div className={style.promotions_card_img}></div>
                                <article>
                                        <h3>Flamboyage</h3>
                                        <p>One of the latest hair colour technique for those who want a truly blended, natural looking highlights.</p>                                
                                </article>
                        </div>
                        <div className={style.promotions_card}>
                                <div className={style.promotions_card_img}></div>
                                <article>
                                        <h3>Rehab</h3>
                                        <p>Hair cut + Regenerating hair mask with immediate action. Perfect for all hair types, when in a hurry.</p>
                                </article>
                        </div>
                        <div className={style.promotions_card}>
                                <div className={style.promotions_card_img}></div>
                                <article>
                                        <h3>Brazilian Blow Out</h3>
                                        <p>Restores the health of your hair and offers an absolute and shiny smoothness for frizz-free hair for 6 months.</p>
                                </article>
                        </div>
                </section>

        </section>
}

export default Promotions;