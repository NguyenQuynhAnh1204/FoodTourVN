import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
import { FaChevronRight } from "react-icons/fa";
import TourInf from "../Theme/Tour";


function TourNear() {
    return (
        <div className="tour-near">
            <div  className="title-text">
                <Link to = {ROUTERS.USER.TOURS}>
                    Tour gần bạn
                    <FaChevronRight className="title-text_icon"/>
                </Link> 
            </div>
            <div className="tour-near_info">
                <TourInf/>
            </div>
            
        </div>
    )
}




export default TourNear;