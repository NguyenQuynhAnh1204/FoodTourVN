import { useEffect, useState } from "react";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// const imgs = [
//     "/img/anh11.jpeg",
//     "/img/anh1.jpeg",
//     "/img/anh7.jpeg",
//     "/img/anh5.jpeg",
//     "/img/anh12.jpeg",
//     "/img/anh10.jpeg",
// ]


// import { useState, useEffect } from "react";


function TourImg({imgs}) {
    const [img, setImg] = useState(imgs[0])

    useEffect(() => {
        const prevButton = document.querySelector(".slick-prev");
        const nextButton = document.querySelector(".slick-next");
        if (prevButton) {
            prevButton.style.display = "none";
        }
        if (nextButton) {
            nextButton.classList.add("reset");
        }
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        vertical: true, 
        arrows: true,
      };
    return (
        <div>
            <div className="tour-detail_img">
                <div className="img-slider">
                    <Slider {...settings}>
                        {imgs.map((img, index) => (
                            <div className="img-item" key={index}>
                                <img src={img} alt={`anh ${index+1}`} onClick={() => setImg(img)}/>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="tour-img-show">
                    <img src = {img} alt="tour"/>
                </div>
            </div>
        </div>
    )
}


export default TourImg;