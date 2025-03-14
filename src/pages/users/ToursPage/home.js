import { memo } from "react";
import { RxSlash } from "react-icons/rx";
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";

import TourItem from "./tours";



function Tour() {
    return (
        <div className="tour-page">
            <div className="router-page">
                <Link to = {ROUTERS.USER.HOME}>Home</Link>
                <RxSlash />
                <Link to = {ROUTERS.USER.TOURS}>Tours</Link>
            </div>
            <TourItem/>
        </div>
    )
}


export default memo(Tour);