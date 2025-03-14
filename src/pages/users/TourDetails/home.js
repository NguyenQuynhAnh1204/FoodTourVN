import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
import { RxSlash } from "react-icons/rx";

import TourImg from "./tourInf/tourImg";
import TourPrice from "./tourInf/tourPrice";
import TourSchedule from "./tourSchedule/schedule";
import TourSupplyInf from "./tourSchedule/supply";
import TourComments from "./tourComments/comments";
import TourRating from "./tourComments/rating";

function TourDetail() {
    
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
                <h4>Bún Săn Mồi - Thử hết các loại bún ngon nhất Hà Nội!</h4>
                <p>rating</p>
                <div className="tour-detail_inf">
                    <TourImg/>
                    <TourPrice/>
                </div>
                <div className="tour-detail_schedule">
                    <TourSchedule/>
                    <TourSupplyInf/>
                </div>
                <div className="tour-detail_comments">
                    <TourRating/>
                    <TourComments/>
                </div>
            </div>
        </div>
    )
}


export default TourDetail;