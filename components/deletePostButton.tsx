'use client'
import React from 'react';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
interface DeletePostButtonProps {
  postId: string;
}

const DeletePostButton: React.FC<DeletePostButtonProps> = ({ postId }) => {
    const router = useRouter();
    
    function handleClick() {
        console.log('post id clicked:', postId);
        deletePost(postId);
    }

    async function deletePost(id: string) {
        try {
            const res = await fetch(`/api/post/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                console.log('Post deleted successfully');
                router.refresh();
            } else {
                console.error('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    }

    return (
        <button onClick={handleClick} type='button' className='bg-red-500 text-white px-4 py-2 rounded mt-2'>
            Delete Post
        </button>
    );
}


export default DeletePostButton;
