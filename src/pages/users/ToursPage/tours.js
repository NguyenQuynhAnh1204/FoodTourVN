import {TOUR_ENDPOINT} from "../../../config";
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";

import { useEffect, useState } from "react";
import StarRating from "../Theme/ShowStarIcon/StarRating";
import Filter from "./filter";
import SortTour from "./sort";

function TourItem() {
    const [data, setData] = useState([]);
    const [visibleCount, setVisibleCount] = useState(6);
    const [sortType, setSortType] = useState("hight");


    useEffect(() => {
        fetch(TOUR_ENDPOINT)
            .then(res => res.json())
            .then(dt => {
                const sortedTours = [...dt.tours].sort((a, b) => b.price - a.price);
                setData(sortedTours);
            });
    }, []);

    const handleNext = () => {
        setVisibleCount(prev => Math.min(prev + 3, data.length));
    };
    const handleSortChange = (sortType) => {
        setSortType(sortType);
    };

    

    useEffect(() => {
        if (data.length > 0) {
            let sortedTours = [...data];
            if (sortType === "hight") sortedTours.sort((a, b) => b.price - a.price); // Giá cao -> thấp
            if (sortType === "low") sortedTours.sort((a, b) => a.price - b.price);   // Giá thấp -> cao
            setData(sortedTours);
        }
    }, [sortType]);
    
    
    return (
        <div>
            <div className="tour-container">
                <Filter/>
                <div className="tour-main">
                    <SortTour onSortChange={handleSortChange} />
                    <div className="tour-content">
                        {
                            data.slice(0, visibleCount).map((d, index) => (
                                <Link to={ROUTERS.USER.TOUR_DETAIL.replace(":title", d.slug)} key={index}>
                                    <div className="tour-near_item">
                                        <img src={d.image[0]} alt={`tour ${index+1}`} />
                                        <div className="description">
                                            <h4 className="roboto">{d.title}</h4>
                                            <div className="tour-inf">
                                                <div className="tour-inf_time">
                                                    <p>Time: <span>{`${d.duration}`}</span></p>
                                                    <p>Participants: <span>{`${d.participants}`}</span></p>
                                                </div>
                                                <div className="tour-inf_rating">
                                                    <StarRating star={d.star} />
                                                </div>
                                                <div className="tour-inf_price">
                                                    <span>
                                                        {d.price ? d.price.toLocaleString("vi-VN") : "Liên hệ"}
                                                        <sup>đ</sup>
                                                    </span>
                                                    / Khách
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </div> 
            </div>
            {visibleCount < data.length && (
                <div className="blog-btn">
                    <button onClick={handleNext}>Xem thêm</button>
                </div>
            )}
        </div>
    );
}

export default TourItem;
