import { memo } from "react";
import { RxSlash } from "react-icons/rx";
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";

import BlogItem from "./blogs";


function Blog() {
    return (
        <div className="blog-page">
            <div className="router-page">
                <Link to = {ROUTERS.USER.HOME}>Home</Link>
                <RxSlash />
                <Link to = {ROUTERS.USER.BLOGS}>Blogs</Link>
            </div>
            <div>
                <BlogItem/>
            </div>
        </div>
    )
}

export default memo(Blog);