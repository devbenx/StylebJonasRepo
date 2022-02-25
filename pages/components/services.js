import style from '../../styles/Home.module.css'
import menuStyle from '../../styles/Menu.module.css'
import { useState } from "react";

function Services(props) {
        const [isChecked, setIsChecked] = useState(false);

        return <section id='Services' className={style.Services}>
                <h1>Services</h1>
                <section className={style.cards_wrapper}>
                        <section className={style.card}>
                                <div className={style.card_img}></div>
                                <article>
                                        <h3>Hair cut</h3>
                                        <p>Customized styles to strike the perfect balance of looks that are enduring, yet original.</p>
                                </article>
                        </section>
                        <section className={style.card}>
                                <div className={style.card_img}></div>
                                <article>
                                        <h3>Treatments</h3>
                                        <p>Restore and protect your scalp & boost hair growth. Keratina, Hyaluronic Acid & Masks</p>
                                </article>
                        </section>
                        <section className={style.card}>
                                <div className={style.card_img}></div>
                                <article>
                                        <h3>Color</h3>
                                        <p>Employing hair products with some of the most natural and rich ingredients.</p>
                                </article>
                        </section>
                </section>
                <section className={menuStyle.services_list_display}>
                        <label className={menuStyle.button_menu}>{isChecked? 'Hide ':'Show '} Menu Prices
                                <input
                                        type="checkbox"
                                        onChange={() => {
                                        setIsChecked(!isChecked);
                                        }}
                                />
                        </label>
                        <section
                                className={`${isChecked ? 'list_prices_wrapper' : 'list_prices_wrapper_not_active'}`}>
                                <section className={menuStyle.ListPrices}>
                                        <h1>Men</h1>
                                        <h3>Cut with Clippers</h3>
                                        <p>25e 30min</p>
                                        <h3>Cut with Scissors</h3>
                                        <p>35e 30min</p>
                                        <h3>Child or Student</h3>
                                        <p>29e 30min</p>
                                        <h3>Grey coverage</h3>
                                        <p>45e 45min</p>
                                        <h3>Hairmask</h3>
                                        <p>10e 15min</p>
                                        <h3>Men's Season Special</h3>
                                        <p>49e 1hr 15min 
                                        Includes: Haircut, Mini facial & Scalp massage</p>
                                </section>
                                <section className={menuStyle.ListPrices}>
                                        <h1>Women</h1>
                                        <h3>Cut</h3>
                                        <p>65e 45min</p>
                                        <h3>Fringe</h3>
                                        <p>10e 15min</p>
                                        <h3>Women express haircut</h3>
                                        <p> 60e 1hr 
                                        Includes wash with natural dry</p>
                                        <h3>Wash and massage</h3>
                                        <p>15e 30min</p>
                                        <h3>Cut</h3>
                                        <p>45e 45min</p>
                                </section>
                                <section className={menuStyle.ListPrices}>
                                        <h1>Color</h1>
                                        <h3>Color</h3>
                                        <p>75e 1hr 30min</p>
                                        <h3>Highlights</h3>
                                        <p>75e 1hr Half Head</p>
                                        <h3>Highlights</h3>
                                        <p>120e 1hr 30min Full Head</p>
                                        <h3>Baby-lights</h3>
                                        <p>100e 1hr</p>
                                        <h3>Balayage</h3>
                                        <p>135e 1hr</p>
                                        <h3>Single Step Bleaching</h3>
                                        <p>60e 1hr from</p>
                                        <h3>Demi-permanent Color</h3>
                                        <p>29e 30min Toner</p>
                                </section>
                                <section className={menuStyle.ListPrices}>
                                        <h1>Blow dry</h1>
                                        <h3>Short</h3>
                                        <p>25e 1hr 55mins</p>
                                        <h3>Medium</h3>
                                        <p>35e 1hr 35mins</p>
                                        <h3>Long Hair</h3>
                                        <p>45e 2hrs 30mins</p>
                                </section>
                                <section className={menuStyle.ListPrices}>
                                        <h1>Organic Brazilian Blow Out</h1>
                                        <h3>Short</h3>
                                        <p>129e 1hr 55mins</p>
                                        <h3>Medium</h3>
                                        <p>179e 1hr 35mins</p>
                                        <h3>Long Hair</h3>
                                        <p>229e 2hrs 30mins</p>
                                        <h3>Extra Long Hair</h3>
                                        <p>279e 3hrs 30mins</p>
                                </section>
                        </section>
                </section>
                <div
                        className={`${isChecked ? 'Scroll' : 'ScrollNot'}`}>
                        <div className={menuStyle.line}></div>
                        <h3>Scroll right</h3>
                </div>
        </section>
}

export default Services;