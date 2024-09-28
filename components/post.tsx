'use client';
import React from 'react';
import DeletePostButton from './deletePostButton';

interface PostProps {
  id: string;
  title: string;
  content: string;
  authorName: string;
}

const Post: React.FC<PostProps> = ({id, title, content, authorName}) => {
    const hanldeHard = () =>{
        console.log('hard delete')
    }
    return (
      <div className="border border-red-300 p-4 mb-4 rounded-lg">
        <h1 className="text-xl font-bold text-red-500 mb-2">{title}</h1>
        <h2 className="text-md font-semibold text-gray-700 mb-2">{authorName}</h2>
        <p className="text-gray-600">{content}</p>
        <DeletePostButton postId={id} />
        <button type='button' onClick={hanldeHard} className="bg-red-500 text-white px-4 py-2 rounded mt-2">Delete Hard</button>
      </div>
    );
  }
  

export default Post;
