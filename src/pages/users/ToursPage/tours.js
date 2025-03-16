import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";

import { useEffect, useState } from "react";
import StarRating from "../Theme/ShowStarIcon/StarRating";
import Filter from "./filter";
import SortTour from "./sort";


function TourItem() {
    const [allData, setAllData] = useState([]);
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(12);

    useEffect(() => {
        fetch("https://67caf3953395520e6af3c0ea.mockapi.io/decsription/tour")
            .then(res => res.json())
            .then(data => {
                setAllData(data);
                setData(data.slice(0, 12));
            })
    }, []);

    const handleNext = () => {
        if(index <= allData.length) {
            setData(allData.slice(0, index + 6));
            setIndex(index + 6);
        }
    }

    return (
        <div>
            <div className="tour-container">
                <Filter/>
                <div className="tour-main">
                    <SortTour/>
                   
                    <div className="tour-content">
                        {
                        data.map((d, index) => (
                            <Link to={ROUTERS.USER.TOUR_DETAIL}>
                            <div className="tour-near_item">
                                <img src={d.img} alt={`tour ${index+1}`}/>
    
                                <div className="description">
                                    <h4 className="roboto">{d.title}</h4>
    
                                    <div className="tour-inf">
                                        <div className="tour-inf_time">
                                            <p>Thời lượng: <span>{`${d.time} tiếng`}</span></p>
                                            <p>Số người: <span>{`${d.people}`}</span></p>
                                        </div>
                                        <div className="tour-inf_rating">
                                            <StarRating star={d.star}/>
                                        </div>
                                        <div className="tour-inf_price">
                                            <span>{d.price.toLocaleString("vi-VN")}
                                            <sup>đ</sup></span>
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
            <div className="blog-btn">
                <button onClick={handleNext}>Xem thêm</button>
            </div>
        </div>
    )
}

export default TourItem;