import React from "react";

function MemeCard({ name, image, top, bottom, likes, id }) {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>{top}</p>
            <p>{bottom}</p>
            <button>Likes: {likes}</button>
        </div>
    )
}

export default MemeCard;