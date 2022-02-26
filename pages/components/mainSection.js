import style from '../../styles/Home.module.css'
import React from 'react';
import { useState, useEffect, useRef } from 'react';

function mainSection(props) {
    const mainSectionRef = useRef(null);

    const [mainWidth, setmainWidth] = useState(0);
    const [mainComponentWidth, setmainComponentWidth] = useState(0);
  
    const handleResize = () => {
            setmainWidth(window.innerWidth);
            setmainComponentWidth(mainSectionRef.current.offsetLeft);
    }
    useEffect(() => {
            // setmainWidth(window.innerWidth)
            if (typeof window !== "undefined") {
                    setmainWidth(window.innerWidth)
                    setmainComponentWidth(mainSectionRef.current.offsetLeft)
            }
            window.addEventListener('resize', handleResize);
            return () => {
                    window.removeEventListener('resize', handleResize)
            }
    }, []);

    return <section ref={mainSectionRef} setmainWidth={props.setmainWidth(mainWidth)} setmainComponentWidth={props.setmainComponentWidth(mainComponentWidth)} className={props.className ? props.className:style.MainSection__ }>{props.children}</section>
}
// const mainSection = React.forwardRef((props, ref) => (
//     <section ref={ref} className={style.MainSection__}>{props.children}</section>
// ));

export default mainSection;