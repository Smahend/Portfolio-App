import React from 'react'
import "./intro.scss";
import {ArrowDownward} from "@material-ui/icons";
import { init } from 'ityped';
import { useEffect, useRef } from "react";



const Intro = () => {
  const textRef = useRef();

   useEffect(() => {
    init(textRef.current, {
         showCursor: true,
         backDelay: 1500,
         backSpeed: 60,
         strings: ['Web Developer!', 'Web Designer!' ,'Web Creater!' ],
         });
   }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                   <img src="assets/mainpic.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Mahendra Sawwasere</h1>
                    <h3>Freelancer <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <ArrowDownward className="icon2"/>
                </a>
            </div>
        </div>
    )
}

export default Intro;
