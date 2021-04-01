import React from "react";
import MemeCard from "./MemeCard";

function MemeList({ memes, setMemes, handleNewFavorite, currentId }) {
    
    const memeCards = memes.map((meme) => {
        return  (<MemeCard
        handleNewFavorite={handleNewFavorite}
        currentId={currentId}
        setMemes={setMemes}
        key={meme.id}
        name={meme.name}
        image={meme.meme_image_url}
        likes={meme.likes}
        id={meme.id}
        />
        )
    })
    return (
        <div className="cards">
           {memeCards}
        </div>
    )
}

export default MemeList;