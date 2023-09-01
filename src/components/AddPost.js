import React, { useState } from 'react';
import '../index.css';



function AddPost({ onAddPost, currentCatImage, setCurrentCatImage }) {
    const [title, setTitle] = useState('');
    const [comment, setComment] = useState('');
    const [image, setImage] = useState(''); 

    const getRandomCatImage = async () => {
        const response = await fetch('https://cataas.com/cat', {
            method: 'GET',
        });

        if (response.ok) {
            const cat = await response.blob();
            const imageUrl = URL.createObjectURL(cat);
            setImage(imageUrl); 
        } else {
            return null;
        }
    };

    const handleAddClick = async () => {
        await getRandomCatImage();

        if (!image) {
            alert('Failed to fetch new cat image.');
            return;
        }

        const newPost = {
            id: Date.now(),
            title: title,
            description: comment, 
            image: image,
        };

        onAddPost(newPost, image);
        setCurrentCatImage(image);
        setTitle('');
        setComment('');
    };

    return (
        <div className="input-block">
            <div>
                <img src={currentCatImage} alt="Cat"/>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Add title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Add your comments here..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={handleAddClick}>Add Post</button>
            </div>
        </div>
    );
}

export default AddPost;