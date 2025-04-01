import {BLOG_ENDPOINT} from "../../../config";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
import BlogContent from "./blogContent";
// import BlogInf from "../Theme/Blog";
// import axios from "axios";

function BlogItem() {
    
    const [data, setData] = useState([]); 
    const [index, setIndex] = useState(0);
    useEffect(() => {
        fetch(BLOG_ENDPOINT)
            .then(res => res.json())
            .then(dt => {
                const data = dt.blogs;
                setData(data);
            })
    }, []);
    if (data.length === 0) {
        return <p>Loading...</p>;
    }
    const handleNext = () => {
        setIndex(prev => Math.min(prev + 3, data.length));
    };

    // lấy văn bản từ html 
    const getFirstParagraph = (html) => {
        let doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.querySelector("p")?.outerHTML || "";
    };
    
    return (
        <div>
            <div className="blog-container">
                {
                    data.map((d, index) => (
                        <Link to = {ROUTERS.USER.BLOG_DETAIL}>
                        <div className="blog-item" key={d.id || index}>
                            <div className="blog-item_img"><img src={d.thumbnail} alt={`blog ${index + 1}`}/></div>
                            <div className="blog-description">
                                <h4 className="blog-description_title">{d.title}</h4>
                                <div className="blog-description_text" dangerouslySetInnerHTML={{ __html: getFirstParagraph(d.content) }}>
                                   
                                </div>
                            </div>
                        </div>
                        </Link>
                    ))
                }
            </div> 
            
            <div className="blog-btn">
                <button onClick={handleNext}>Xem thêm</button>
            </div>
        </div>
    );
}

export default BlogItem;
