import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
import { RxSlash } from "react-icons/rx";
// import { useState, useEffect } from "react";


function BlogDetail() {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     // fetch
    // }, [])

    return (
        <div className="blog-detail">
                <div className="router-page">
                    <Link to = {ROUTERS.USER.HOME}>Home</Link>
                    <RxSlash />
                    <Link to = {ROUTERS.USER.BLOGS}>Blogs</Link>
                    <RxSlash/>
                    <Link to = {ROUTERS.USER.BLOG_DETAIL}>Blog Title</Link>
                </div>
                <div className="blog-detail_container">
                    <h4 className="blog-title">24h ăn sập Hà Nội cùng Ninh Tito</h4>
                    <div>

                    </div>
                </div>
        </div>
    )
}


export default BlogDetail;