import React, { useEffect, useState } from "react";
import MemeForm from "./MemeForm";
import MemeList from "./MemeList";
import NavBar from "./NavBar";

function MemeContainer() {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/memes')
        .then(response => response.json())
        .then(data => setMemes(data))
    },[])

    return (
        <div>
            <NavBar />
            <MemeForm />
            <MemeList memes={memes}/>
        </div>
    )
}

export default MemeContainer;