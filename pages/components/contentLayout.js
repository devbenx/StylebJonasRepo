import style from '../../styles/Home.module.css'

function contentLayout(props) {
    return <section className={style.ContentLayout}>{props.children}</section>
}

export default contentLayout;