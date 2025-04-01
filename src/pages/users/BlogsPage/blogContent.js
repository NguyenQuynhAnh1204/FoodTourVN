import React from "react";

const BlogContent = ({ content }) => {
    if (!content) return null;

    return (
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
    );
};

export default BlogContent;
