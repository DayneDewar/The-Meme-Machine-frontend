import React, { useState } from "react";

function MemeForm({handleNewMemeForm, allImages, currentId}) {

    const [image, setImage] = useState("")
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [name, setName] = useState("")


    const dropdown = allImages.map((eachImage) => {
        return (<option key={eachImage} value={eachImage}>{eachImage}</option>)
    })

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            user_id: currentId,
            name: name,
            image: image,
            top: topText, 
            bottom: bottomText,
            likes: 0
        };

    fetch('http://localhost:3001/generate', {
    method: 'POST',
    headers: {
    "Content-Type": "application/json",
  }
  ,body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then((newMemeImage) => {
        handleNewMemeForm(newMemeImage)
        setName("")
        setTopText("")
        setBottomText("")
})
}

    function handleImageOnChange(e){
        setImage(e.target.value)
    }

    function handleNameOnChange(e){
        setName(e.target.value)
    }

    function handleTopOnChange(e){
        setTopText(e.target.value)
    }

    function handleBottomOnChange(e){
        setBottomText(e.target.value)
    }

    return (
        <div>
            <h2>Create A New Meme</h2>
        <form onSubmit={handleSubmit}>
        <select type="text" name="image"  onChange={handleImageOnChange} value={image} placeholder="Image URL" >
            {dropdown}
        </select>
        <input  type="text" name="name"  onChange={handleNameOnChange} value={name} placeholder="Name Field" />
        <input  type="text" name="top"  onChange={handleTopOnChange} value={topText} placeholder="Top Input Field" />
        <input  type="text" name="Bottom"  onChange={handleBottomOnChange} value={bottomText} placeholder="Bottom Input Field" />
        <button type="submit">Generate Meme</button>
        </form>
        </div>
    )
}

export default MemeForm;