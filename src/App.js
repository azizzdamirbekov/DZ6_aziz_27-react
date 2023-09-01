import React, { useState } from 'react';
import './index.css';
import Post from './components/Post';
import AddPost from './components/AddPost';

function App() {
    const [posts, setPosts] = useState([]);
    const [currentCatImage, setCurrentCatImage] = useState('https://cataas.com/cat');

    const addPost = (newPost, newImage) => {
        setPosts([...posts, { ...newPost, image: newImage }]);
        setCurrentCatImage(newImage);
    };

    const editPost = (postId, updatedPost) => {
        const updatedPosts = posts.map((post) =>
            post.id === postId ? { ...post, ...updatedPost } : post
        );
        setPosts(updatedPosts);
    };

    const deletePost = (postId) => {
        const updatedPosts = posts.filter((post) => post.id !== postId);
        setPosts(updatedPosts);
    };

    return (
        <div>
            <h1 className='header'>Cats API</h1>
            <AddPost
                onAddPost={addPost}
                currentCatImage={currentCatImage}
                setCurrentCatImage={setCurrentCatImage}
            />
            <div className='posts'>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        post={post}
                        currentCatImage={post.image}
                        onEditPost={editPost}
                        onDeletePost={deletePost}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;