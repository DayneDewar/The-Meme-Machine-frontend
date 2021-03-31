import React from "react";
import MemeCard from "./MemeCard";

function MemeList({ memes, setMemes, handleNewFavorite}) {
    
    const memeCards = memes.map((meme) => {
        return  (<MemeCard
        handleNewFavorite={handleNewFavorite}
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
        <div>
           {memeCards}
        </div>
    )
}

export default MemeList;