import style from '../../styles/Home.module.css'
import Image from 'next/image'

function Portfolio(props) {
        return <section id='Portfolio' className={style.Portfolio}>
                <h1>Portfolio</h1>
                <section className={style.portfolio_wrapper}>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prt06.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prt06.jpg"
                                        className={style.HeroPortraitStarsSettings}/>

                                </div>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prtu05.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prtu05.jpg"
                                        className={style.HeroPortraitStarsSettings}/>
                                </div>
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prtu06.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prtu06.jpg"
                                        className={style.portfolio_imgSettings}/>

                                </div>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prt04.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prt04.jpg"
                                        className={style.portfolio_imgSettings}/>
                                </div>                        
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                        <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prt05.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prt05.jpg"
                                        className={style.portfolio_imgSettings}/>

                                </div>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prtu01.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prtu01.jpg"
                                        className={style.portfolio_imgSettings}/>
                                </div>                        
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                        <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prtu02.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prtu02.jpg"
                                        className={style.portfolio_imgSettings}/>

                                </div>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prtu03.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prtu03.jpg"
                                        className={style.portfolio_imgSettings}/>
                                </div>                        
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                        <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prtu04.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prtu04.jpg"
                                        className={style.portfolio_imgSettings}/>

                                </div>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prt02.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prt02.jpg"
                                        className={style.portfolio_imgSettings}/>
                                </div>                        
                        </article>
                        <article className={style.portfolio_columflexgrid}>
                        <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prt03.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prt03.jpg"
                                        className={style.portfolio_imgSettings}/>

                                </div>
                                <div className={style.portfolio_img}>
                                        <Image
                                        src="/img/portfolio/prt01.jpg"
                                        alt="Stars"
                                        layout="fill"
                                        placeholder="blur"
                                        blurDataURL="/img/portfolio/prt01.jpg"
                                        className={style.portfolio_imgSettings}/>
                                </div>                        
                        </article>
                </section>
        </section>
}

export default Portfolio;