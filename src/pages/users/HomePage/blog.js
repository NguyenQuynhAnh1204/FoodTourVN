import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
import { FaChevronRight } from "react-icons/fa";
import BlogInf from "../Theme/Blog";


function Blog() {
    
    return (
        <div className="blog">
            <div className="title-text">
                <Link to = {ROUTERS.USER.BLOGS}>
                    Blog
                    <FaChevronRight className="title-text_icon"/>
                </Link>
            </div> 
            <div className="blogs-info">
                <BlogInf/>
            </div>
            
        </div>
    )
};


export default Blog;