import style from '../../styles/Home.module.css'

function Portfolio(props) {
        return <section className={style.Portfolio}>
                <h1>Clientele</h1>
                <section className={style.portfolio_wrapper}>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}></div>
                                <div className={style.portfolio_img}></div>
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}></div>
                                <div className={style.portfolio_img}></div>
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}></div>
                                <div className={style.portfolio_img}></div>
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}></div>
                                <div className={style.portfolio_img}></div>
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}></div>
                                <div className={style.portfolio_img}></div>
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}></div>
                                <div className={style.portfolio_img}></div>
                        </article>
                </section>
        </section>
}

export default Portfolio;