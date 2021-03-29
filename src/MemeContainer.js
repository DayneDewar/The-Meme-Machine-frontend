import React, { useEffect, useState } from "react";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import NavBar from "./NavBar";

function MemeContainer() {
    const [memes, setMemes] = useState([]);

    function handleNewMemeForm(newMeme){
        const updatedMemes = [...memes, newMeme]
        setMemes(updatedMemes)
    }


    useEffect(() => {
        fetch('http://localhost:3000/memes')
        .then(response => response.json())
        .then(data => setMemes(data))
    },[])

    return (
        <div>
            <NavBar />
            <MemeForm handleNewMemeForm={handleNewMemeForm}/>
            <MemeList memes={memes}/>
        </div>
    )
}

export default MemeContainer;