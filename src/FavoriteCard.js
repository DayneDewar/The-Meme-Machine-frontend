import React from 'react';

function FavoriteCard({ id, image, setFavorites }){

    function handleFavoriteDelete(e) {
        e.preventDefault();

        fetch(`http://localhost:3001/favorites/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        setFavorites(favorites => favorites.filter(favorite => 
            favorite.id !== id
        ))
    }

    return <div className="card">
        <img src={"http://localhost:3001" + image} alt={id} />
        <button className="primary" onClick={handleFavoriteDelete}>Remove from Favorites</button>
    </div>
}

export default FavoriteCard;