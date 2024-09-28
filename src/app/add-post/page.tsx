'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const AddPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [published, setPublished] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        try{
            fetch('/api/add-post', {
                method: 'POST', 
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ title, content, published })})
                
            }
            catch(error){
                console.error(error)
            }
    setContent('')
    setTitle('')
    setPublished(false)
    };

    return (
        <div className="m-10">
            <Link href={'/'}>View Feeds</Link>
            <h1 className="text-2xl font-bold mb-5">Add Post</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block mb-1">Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className=" px-3 py-2 border rounded-md"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block mb-1">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        className=" px-3 py-2 border rounded-md"
                        rows={4}
                    />
                </div>
                <div>
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={published}
                            onChange={(e) => setPublished(e.target.checked)}
                            className="mr-2"
                        />
                        Published
                    </label>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Add Post
                </button>
            </form>
        </div>
    );
}

export default AddPost;
