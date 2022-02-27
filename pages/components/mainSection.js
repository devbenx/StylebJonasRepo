import style from '../../styles/Home.module.css'
import React, { useState, useEffect, useRef } from 'react';

function MainSection( props ) {

        const [mainSectionRefWidth, setMainSectionRefWidth] = useState(0)
        const mainSectionRef = useRef(null)

        useEffect(() => {

                const handleResize = () => {
                        setMainSectionRefWidth(mainSectionRef.current.offsetLeft)
                        console.log(mainSectionRefWidth)
                }

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

export default MainSection;
