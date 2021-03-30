import React, { useEffect, useState } from "react";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import NavBar from "./NavBar";

function MemeContainer() {
    const [memes, setMemes] = useState([]);
    const [allImages, setAllImages] = useState([]);


    useEffect(() => {
        fetch('https://ronreiter-meme-generator.p.rapidapi.com/images?rapidapi-key=d45c4bf44bmsh5794f268d449d19p18f503jsn618a9ca69a76')
        .then(res => res.json())
        .then(data => setAllImages(data))
    },[])

    function handleNewMemeForm(newMeme){
        const updatedNewMemes = [...memes, newMeme]
        setMemes(updatedNewMemes)
    }


    useEffect(() => {
        fetch('http://localhost:3000/memes')
        .then(response => response.json())
        .then(data => setMemes(data))
    },[])
    return (
        <div>
            <NavBar />
            <MemeForm handleNewMemeForm={handleNewMemeForm} allImages={allImages}/>
            <MemeList memes={memes} setMemes={setMemes}/>
        </div>
    )
}

export default MemeContainer;