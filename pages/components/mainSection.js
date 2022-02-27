import style from '../../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';

function mainSection(props) {
    const mainSectionRef = useRef(null);

    const [mainWidth, setMainWidth] = useState(0);
    const [mainComponentWidth, setMainComponentWidth] = useState(0);
  
    const handleResize = () => {
            setMainWidth(window.innerWidth);
            setMainComponentWidth(mainSectionRef.current.offsetLeft);
    }
    useEffect(() => {
            // setmainWidth(window.innerWidth)
            if (typeof window !== "undefined") {
                    setMainWidth(window.innerWidth)
                    setMainComponentWidth(mainSectionRef.current.offsetLeft)
            }
            window.addEventListener('resize', handleResize);
            return () => {
                    window.removeEventListener('resize', handleResize)
            }
    }, []);

    return <section ref={mainSectionRef} setmainWidth={props.setmainWidth(mainWidth)} setmainComponentWidth={props.setmainComponentWidth(mainComponentWidth)} className={props.className ? props.className:style.MainSection__ }>{props.children}</section>
}

export default mainSection;