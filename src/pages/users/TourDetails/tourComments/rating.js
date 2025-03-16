import { useState } from "react";

import TourComments from "./comments";
import StarRating from "../../Theme/ShowStarIcon/StarRating";


const labels = ["Tất cả", "5 sao", "4 sao", "3 sao", "2 sao", "1 sao", "Có hình ảnh"];
function TourRating() {
    const [btn, setBtn] = useState("Tất cả");

    const handleClick = (label) => {
        setBtn(label);
    }

    return (
        <div className="tour-detail_rating">
            <p className="rating-title">Đánh giá Tour</p>
            <div className="rating-filter">
                <div className="rating-star">
                    <p><span>4.7</span> trên 5</p>
                    <StarRating star = {4.7}/>
                </div>
                <div className="rating-filter_btn">
                    {
                        labels.map((label, index) => (
                            <button 
                                key={index}
                                onClick = {() => handleClick(label)}
                                className= {btn === label ? "btn-click" : ""}
                            >
                                {label}
                            </button>
                        ))
                    }
                </div>
            </div>
            <TourComments/>
        </div>
    )
}


export default TourRating;