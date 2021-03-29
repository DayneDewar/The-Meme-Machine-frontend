import React from "react";
import MemeCard from "./MemeCard";

function MemeList({ memes, allCreatedMemes }) {
    const memeCards = allCreatedMemes.map((meme) => {
        return  (<MemeCard
        key={meme.id}
        image={meme}
        id={meme}
        // key={meme.id}
        // name={meme.name}
        // image={meme.image}
        // top={meme.top}
        // bottom={meme.bottom}
        // likes={meme.likes}
        // id={meme.id}
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