import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
import { RxSlash } from "react-icons/rx";

import TourImg from "./tourInf/tourImg";
import TourPrice from "./tourInf/tourPrice";
import TourSchedule from "./tourSchedule/schedule";
import TourSupplyInf from "./tourSchedule/supply";
import TourRating from "./tourComments/rating";
import TourDescript from "./tourDescript/tourDescript";

function TourDetail() { 
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
                <h4>Bún Săn Mồi - Thử hết các loại bún ngon nhất Hà Nội!</h4>
                
                <div className="tour-detail_inf">
                    <TourImg/> 
                    <TourPrice/>
                </div>
                <TourDescript/>
                <div className="tour-detail_schedule">
                    <TourSchedule/>
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