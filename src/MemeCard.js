import React from "react";

function MemeCard({ name, image, top, bottom, likes, id, handleNewCreatedMeme }) {

    function handlePost() {
        const data = {
            name: "",
            image: image,
            top: "",
            bottom: "",
            likes: 0
        }
        fetch('http://localhost:3000/memes', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(newMeme => handleNewCreatedMeme(newMeme))
        
    }
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{top}</p>
            <p>{bottom}</p>
            <button onClick={handlePost}>Save</button>
            <button>Likes: {likes}</button>
        </div>
    )
}

export default MemeCard;