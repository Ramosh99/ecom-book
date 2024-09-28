'use client';
import React from 'react';

interface PostProps {
  id: string;
  title: string;
  content: string;
  authorName: string;
}

const Post: React.FC<PostProps> = ({id, title, content, authorName}) => {
    return (
        <div className="border border-red-300 p-4 mb-4 rounded-lg">
            <h1 className="text-sm text-gray-500">{id}</h1>
            <h1 className="text-xl font-bold text-red-500 mb-2">{title}</h1>
            <h2 className="text-md font-semibold text-gray-700 mb-2">{authorName}</h2>
            <p className="text-gray-600">{content}</p>
        </div>
    );
}

export default Post;
