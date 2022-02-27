import style from '../../styles/Home.module.css'

function Reviews(props) {
        return <section className={style.Reviews}>
                <h1>Reviews</h1>
                <section className={style.reviews_wrapper}>
                        <section className={style.reviews_columflexgrid}>
                                <article className={style.reviews_testimonials}>
                                        <h3>Balayage</h3>
                                        <p>Best balayage I had so far! Nice highlighting
                                        and transition to natural hair color. Recommend :)</p>
                                        <p>★★★★★</p>
                                </article>
                                <article className={style.reviews_testimonials}>
                                        <h3>Men Haircut</h3>
                                        <p>Very good haircut! Jonas understood exactly what
                                        I came for, and the atmosphere in his studio
                                        was very relaxed</p>
                                        <p>★★★★★</p>
                                </article>
                        </section>
                        <section className={style.reviews_columflexgrid}>
                                <article className={style.reviews_testimonials}>
                                        <h3>Men Haircut</h3>
                                        <p>Very relaxed and comfortable atmosphere. I felt
                                        very at ease and Jonas did a great job!</p>
                                        <p>★★★★★</p>
                                </article>
                                <article className={style.reviews_testimonials}>
                                        <h3>Ladies Haircut</h3>
                                        <p>Jonas was very nice! He gave me the best head
                                        massage when washing my hair. Took the time for
                                        me and felt very professional. Will definitely come back!</p>
                                        <p>★★★★★</p>
                                </article>
                        </section>
                        <section className={style.reviews_columflexgrid}>
                                <article className={style.reviews_testimonials}>
                                        <h3>Ladies Haircuts</h3>
                                        <p>Jonas was very nice, he listened to my wishes,
                                        gave good imput and I am very happy with the result!</p>
                                        <p>★★★★★</p>
                                </article>
                                <article className={style.reviews_testimonials}>
                                        <h3>Ladies Highlights</h3>
                                        <p>Very nice salon and guy! Was an absolute sweetheart
                                        to my 10 month old daughter and i felt at home directly!</p>
                                        <p>★★★★★</p>
                                </article>
                        </section>
                </section>
        </section>
}

export default Reviews;