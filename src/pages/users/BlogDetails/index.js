import { useState, useEffect } from "react";  
import {Link, useParams} from "react-router-dom";
import { BLOG_ENDPOINT } from "../../../config";
import {ROUTERS} from "../../../utils/router";
import { RxSlash } from "react-icons/rx";
import BlogContent from "../BlogsPage/blogContent";


function BlogDetail() {
    const { title } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(BLOG_ENDPOINT)
            .then(res => res.json())
            .then(dt => {
                const selectedBlog = dt.blogs.find(t => t.slug === title);
                setBlog(selectedBlog);
                console.log(selectedBlog)
            });
    }, [title]);

    if (!blog) return <h1>Blog không tồn tại!</h1>

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
                    <h4 className="blog-title">{blog.title}</h4>
                    {/* <img src={blog.thumbnail} alt="anh1"/> */}
                    <div className="blog-detail_content">
                       <BlogContent content={blog.content}/>
                    </div>
                </div>
        </div>
    )
}


export default BlogDetail;