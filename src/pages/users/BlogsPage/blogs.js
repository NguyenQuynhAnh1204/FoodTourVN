import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {ROUTERS} from "../../../utils/router";
// import BlogInf from "../Theme/Blog";
// import axios from "axios";

function BlogItem() {
    const [datas, setDatas] = useState([]); 
    const [data, setData] = useState([]); 
    const [index, setIndex] = useState(12);
    useEffect(() => {
        fetch("https://67caf3953395520e6af3c0ea.mockapi.io/decsription/blog")
            .then(res => res.json())
            .then(dt => {
                setDatas(dt);
                setData(dt.slice(0, 12));
            })
            // .then(response => {
            //     setDatas(response.data); 
            //     setData(response.data.slice(0, 6));
            //     console.log("mount");
            // })
            // .catch(error => {
            //     console.log("Lỗi khi tải dữ liệu:", error);
            // });
    }, []);

    const handleNext = () => {
        if (index <= datas.length) {
            setData(datas.slice(0, index + 6)); 
            setIndex(index + 6);
        }
    };

    return (
        <div>
            <div className="blog-container">
                {
                    data.map((d, index) => (
                        <Link to = {ROUTERS.USER.BLOG_DETAIL}>
                        <div className="blog-item" key={d.id || index}>
                            <img src={d.img} alt={`blog ${index + 1}`}/>
                            <div className="blog-description">
                                <h4>{d.title}</h4>
                                <p>{d.describe}</p>
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
