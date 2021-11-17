import React from 'react';
import "./testimonial.scss";
const Testimonial = () => {
    const data = [
        {
          id: "1",
          name: "Mahi",
          title: "Co-founder of StudyCampus",
          img: "./assets/mahendra pass.jpg",
          docs: "Get your profile marked as 'Featured' and get a higher rank when recruiters search for resumes.",
          icon: "./assets/whatsup.png",
        },
        {
            id: "2",
            name: "MS",
            title: "CEO of StudyCampus",
            img: "./assets/picmahi.jpg",
            docs: "In an essay, article, or book, an introduction (also known as a prolegomenon) is a beginning section which states the purpose and goals of the following writing.",
            icon: "./assets/linkdin (1).png",
            featured: true,
          },
          {
            id: "3",
            name: "mahendra",
            title: "Chairman of StudyCampus",
            img: "./assets/mahendra pass.jpg",
            docs: "Get your profile marked as 'Featured' and get a higher rank when recruiters search for resumes.",
            icon: "./assets/twiter.png",
          },
    ];

    return (
        <div className="testimonial" id="testimonial">
            <h2>Testimonial</h2>
            <div className="container">
               {data.map((d)=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="top">
                        <img className="left" src="assets/arrow-right.png" alt="" />
                        <img className="user" src={d.img} alt="" />
                        <img className="right" src={d.icon} alt="" />
                    </div>
                    <div className="center">
                    {d.docs}
                    </div>
                    <div className="bottam">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
               ))}
            </div>
        </div>
    )
}

export default Testimonial
