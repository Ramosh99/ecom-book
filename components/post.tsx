import React from 'react';

const Post = ({id, title, content, authorName}:any) => {
    return (
        <div>
        <h1>{id}</h1>
        <h1>{title}</h1>
        <h2>{authorName}</h2>
        <p>{content}</p>
        </div>
    );
}

export default Post;
