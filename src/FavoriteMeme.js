import React from 'react';
import FavoriteCard from "./FavoriteCard";

function FavoriteMeme({ favorites, setFavorites }) {
    const favoriteCards = favorites.map((favorite) => {
        return (
            <FavoriteCard 
            setFavorites={setFavorites}
            key={favorite.id}
            id={favorite.id}
            image={favorite.meme.meme_image_url}
            />
        )
    })
    return (
        <div>
            <h2>Favorite Memes</h2>
            {favoriteCards}
        </div>
    )
}

export default FavoriteMeme;