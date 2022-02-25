import style from '../../styles/Home.module.css'
import navStyle from '../../styles/NavigationBar.module.css'

import Link from 'next/link'

function navigationBar(props) {

        return <section className={navStyle.NavigationBar__}>
                <input id="menu__toggle" className={navStyle.menu__toggle} type="checkbox" />
                <label className={navStyle.menu__btn} htmlFor="menu__toggle">
                        <span></span>
                </label>
                <Link href="/"><a><section className={navStyle.logo}></section></a></Link>
                {/* <div className={navStyle.lilogo}><Link href="/"><a><div className={navStyle.logo}></div></a></Link></div> */}
                <ul className={navStyle.NavigationBarItems}>
                        <li><Link href="/about"><a>About</a></Link></li>
                        <li><Link href="/#Services"><a>Services</a></Link></li>
                        <li><Link href="/#Hours"><a>Hours</a></Link></li>
                        <li><Link href="/contact"><a className={navStyle.BookNow}>Book now</a></Link></li>
                </ul>
        </section>
}

export default navigationBar;