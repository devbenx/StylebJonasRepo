import style from '../../styles/Home.module.css'
// Components
import { useState, useEffect, useRef } from 'react';

export default function Loading(props) {
  const [mainWidth, setmainWidth] = useState(0);
  const [mainComponentWidth, setmainComponentWidth] = useState(0);

  return (
    <div className={style.Loading}>
        {/* <Image src="/img/background.jpg" layout="fill" quality={100}/> */}
        <div className={style.LoadingLogo}></div>
        <div className={style.LdsRipple}><div></div><div></div></div>
    </div>
  )
}