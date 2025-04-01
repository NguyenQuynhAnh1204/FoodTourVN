import {BLOG_ENDPOINT} from "../../../../config";
import { useState, useEffect } from "react";

function BlogInf() {
    const [data, setData] = useState([]); 
    
    useEffect(() => {
        fetch(BLOG_ENDPOINT)
            .then(res => res.json())
            .then(dt => {
                const data = dt.blogs.slice(0, 6);
                setData(data);
            })
    }, []);
    if (data.length === 0) {
        return <p>Loading...</p>;
    }
    const getFirstParagraph = (html) => {
        let doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.querySelector("p")?.outerHTML || "";
    };
    
    return (
        <>
        {data.map((d, index) => (
            <div className="blog-item" key={index}>
                <div className="blog-item_img">
                <img src={d.thumbnail} alt={`blog ${index+1}`}/>
                </div>
                <div className="description">
                    <h4 className="roboto">{d.title}</h4>
                    <div className="cabin" dangerouslySetInnerHTML={{ __html: getFirstParagraph(d.content) }}></div>
                </div>
            </div>
        ))}   
        </>
    )
}

export default BlogInf;