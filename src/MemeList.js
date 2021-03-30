import React from "react";
import MemeCard from "./MemeCard";

function MemeList({ memes, setMemes }) {

    // function handleNewCreatedMeme(newMeme){
    //     const updatedMemes = [...allCreatedMemes, newMeme];
    //     setAllCreatedMemes(updatedMemes)
    // }

    
    const memeCards = memes.map((meme) => {
        return  (<MemeCard
        // handleNewCreatedMeme={handleNewCreatedMeme}
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