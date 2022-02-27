import style from '../../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';

function mainSection( props ) {
    const mainSectionRef = React.useRef(null);
    const [mainSectionRefWidth, setMainSectionRefWidth] = React.useState(0);

    const handleResize = () => {
        setMainSectionRefWidth(mainSectionRef.current.offsetLeft);
        console.log(mainSectionRefWidth);
    }

    useEffect(() => {
            if (typeof window !== "undefined") {
                setMainSectionRefWidth(mainSectionRef.current.offsetLeft);
                if(props.setMainComponentWidthChanger != null){
                        props.setMainComponentWidthChanger(mainSectionRefWidth)
                }
                console.log(mainSectionRefWidth);
            }
            window.addEventListener('resize', handleResize)
            return () => {
                    window.removeEventListener('resize', handleResize)
            }
    }, [mainSectionRefWidth]);

    return <section ref={mainSectionRef} className={props.className ? props.className:style.MainSection__ }>
        {props.children}
    </section>
}

export default mainSection;