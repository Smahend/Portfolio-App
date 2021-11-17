import React from 'react';
import './work.scss';
import { useState } from 'react';

const Works = () => {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/ph-3.png",
            title: "Web Application",
            dosc: "Browse through our FREE-themed collection. All our photos are of high quality, so go ahead and download them for your website, blog or article - for free.",
            img: "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg",
        },
        {
            id: "2",
            icon: "./assets/ph-3.png",
            title: "Mobile Application",
            dosc: "Browse through our FREE-themed collection. All our photos are of high quality, so go ahead and download them for your website, blog or article - for free.",
            img: "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg",
        },
        {
            id: "3",
            icon: "./assets/ph-3.png",
            title: "Branding",
            dosc: "Browse through our FREE-themed collection. All our photos are of high quality, so go ahead and download them for your website, blog or article - for free.",
            img: "https://images.pexels.com/photos/39853/woman-girl-freedom-happy-39853.jpeg?cs=srgb&dl=pexels-jill-wellington-39853.jpg&fm=jpg",
        },
    ];

    const handleClick = (way)=>{
        way === "left" 
        ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2 ) 
        : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="work" id="work">
            <div 
            className="slider"
            style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
               {data.map((d)=>(
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon} alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.dosc}</p>
                                <span>Project</span>
                            </div>
                        </div>
                        <div className="right">
                            <img src="https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?cs=srgb&dl=pexels-hasan-albari-1229861.jpg&fm=jpg" alt="" />
                        </div>
                    </div>
                </div>
               ))}
            </div>
            <img src="assets/next.png" className="arrow left" alt="" onClick={()=>handleClick("left")} />
            <img src="assets/left-arrow.png" className="arrow right" alt="" onClick={()=>handleClick("")} />
        </div>
    )
}

export default Works;
