import React, { useState } from "react";

function MemeCard({ name, image, likes, id, handleNewFavorite, setMemes }) {
    const [newLikes, setNewLikes] = useState(likes)

    function handleFavorite(e) {
        e.preventDefault();
        

        const data = {
            user_id: 1,
            meme_id: id
        }
        fetch('http://localhost:3000/favorites', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(newFavorite => handleNewFavorite(newFavorite))
    }

    function handleLikes(e) {
        fetch(`http://localhost:3000/memes/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({likes: newLikes + 1})
        })
        .then(r => r.json())
        .then(data => setNewLikes(newLikes + 1))
    }

    function handleDelete(e) {
        e.preventDefault();

            // alert("Please Remove From Your Favorites Before Deleting This Meme")
            fetch(`http://localhost:3000/memes/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        setMemes(memes => memes.filter(meme => 
            meme.id !== id
        ))
    }

    return (
        <div>
            <h3>{name}</h3>
            <img src={"http://localhost:3000" + image} alt={name} />
            <button onClick={handleFavorite}>Favorite</button>
            <button onClick={handleLikes}>Likes: {newLikes}</button>
            <button onClick={handleDelete}>🗑</button>
        </div>
    )
}

export default MemeCard;