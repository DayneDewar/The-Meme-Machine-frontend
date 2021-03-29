import React from "react";

function MemeCard({ name, image, top, bottom, likes, id }) {

    function handlePost() {
        const data = {
            name: "test",
            image: image,
            top: "test top 1",
            bottom: "test bottom 1",
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
            .then(newMeme => console.log(newMeme))
        
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