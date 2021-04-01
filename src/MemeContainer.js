import React, { useEffect, useState } from "react";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";

function MemeContainer({ handleNewFavorite, currentId }) {
    const [memes, setMemes] = useState([]);
    const [allImages, setAllImages] = useState([]);

    useEffect(() => {
        fetch('https://ronreiter-meme-generator.p.rapidapi.com/images?rapidapi-key=d45c4bf44bmsh5794f268d449d19p18f503jsn618a9ca69a76')
        .then(res => res.json())
        .then(data => setAllImages(data))
    },[])

    function handleNewMemeForm(newMeme) {
        const updatedNewMemes = [...memes, newMeme]
        setMemes(updatedNewMemes)
    }

    useEffect(() => {
        fetch('http://localhost:3001/memes')
        .then(response => response.json())
        .then(data => setMemes(data))
    },[])

    return (
        <div>
            <MemeForm handleNewMemeForm={handleNewMemeForm} allImages={allImages} currentId={currentId}/>
            <MemeList memes={memes} setMemes={setMemes} handleNewFavorite={handleNewFavorite} currentId={currentId}/>
        </div>
    )
}

export default MemeContainer;