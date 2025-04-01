import {Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";   
import {ROUTERS} from "../../../utils/router";
import { RxSlash } from "react-icons/rx";
import { TOUR_ENDPOINT } from "../../../config";
import TourImg from "./tourInf/tourImg";
import TourPrice from "./tourInf/tourPrice";
import TourSchedule from "./tourSchedule/schedule";
import TourSupplyInf from "./tourSchedule/supply";
// import TourRating from "./tourComments/rating";
import TourDescript from "./tourDescript/tourDescript";

function TourDetail() { 
    const { title } = useParams();
    const [tour, setTour] = useState(null);

    useEffect(() => {
        fetch(TOUR_ENDPOINT)
            .then(res => res.json())
            .then(dt => {
                const selectedTour = dt.tours.find(t => t.slug === title);
                setTour(selectedTour);
                
            });
    }, [title]);

    if (!tour) return <h1>Tour không tồn tại!</h1>


    // sẽ call api, sử dung useParam
    return (
        <div className="tour-detail">
            <div className="router-page">
                    <Link to = {ROUTERS.USER.HOME}>Home</Link>
                    <RxSlash />
                    <Link to = {ROUTERS.USER.TOURS}>Tours</Link>
                    <RxSlash/>
                    <Link to = {ROUTERS.USER.TOUR_DETAIL}>Tour Title</Link>  
            </div>
            <div className="tour-detail_container">
                <h4>{tour.title}</h4>
                
                <div className="tour-detail_inf">
                    <TourImg imgs={tour.image}/> 
                    <TourPrice price = {tour.price} people = {tour.participants} time = {tour.duration}/>
                </div>
                <TourDescript descript = {tour.description}/>
                <div className="tour-detail_schedule">
                    <TourSchedule schedule = {tour.schedule}/>
                    <TourSupplyInf/>
                </div>
                {/* <div className="tour-detail_comments">
                    <TourRating/>
                </div> */}
            </div>
        </div>
    )
}


export default TourDetail;