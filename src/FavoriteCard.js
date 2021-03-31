import React from 'react';

function FavoriteCard({ id, image, setFavorites }){

    function handleFavoriteDelete(e) {
        e.preventDefault();

        fetch(`http://localhost:3000/favorites/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        setFavorites(favorites => favorites.filter(favorite => 
            favorite.id !== id
        ))
    }

    return <div>
        <img src={"http://localhost:3000" + image} alt={id} />
        <button onClick={handleFavoriteDelete}>Remove from Favorites</button>
    </div>
}

export default FavoriteCard;