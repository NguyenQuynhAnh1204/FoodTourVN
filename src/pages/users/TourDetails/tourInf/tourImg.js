import React from "react";
import Slider from "react-slick";

function TourImg() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
    return (
        <div>
            <div className="tour-detail_img">
                <div className="">
                    <Slider {...settings}>
                        
                    </Slider>
                </div>
                <div>
                    <img src=""/>
                </div>
            </div>
        </div>
    )
}


export default TourImg;