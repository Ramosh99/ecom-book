import React from 'react';
interface PostProps {
  id: string;
  title: string;
  content: string;
  authorName: string;
}

const Post: React.FC<PostProps> = ({id, title, content, authorName}) => {
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
