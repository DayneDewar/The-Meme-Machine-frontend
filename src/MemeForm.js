import React, { useState } from "react";

function MemeForm({handleNewMemeForm, allImages}) {

    const [image, setImage] = useState("")
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")
    const [apiImageUrl, setApiImageUrl] = useState("")

    const dropdown = allImages.map((eachImage) => {
        return (<option key={eachImage} value={eachImage}>{eachImage}</option>)
    })

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            user_id: 1,
            image: image,
            top: topText, 
            bottom: bottomText,
            likes: 0
        };

    fetch('http://localhost:3000/generate', {
    method: 'POST',
    headers: {
    "Content-Type": "application/json",
  }
  ,body: JSON.stringify(data)
    })
    .then(res => res.json())
    // .then(data => console.log(data) )
    .then((newMemeImage) => {
        // console.log(outside)
        // setApiImageUrl(outside)
        // handleNewMemeForm(outside)
})
}

    function handleImageOnChange(e){
        setImage(e.target.value)
    }

    function handleTopOnChange(e){
        setTopText(e.target.value)
    }

    function handleBottomOnChange(e){
        setBottomText(e.target.value)
    }

    return (
        <div>
            <h2>New Meme</h2>
            <img src={apiImageUrl} alt="meme"/>
        <form onSubmit={handleSubmit}>
        <select type="text" name="image"  onChange={handleImageOnChange} value={image} placeholder="Image URL" >
            {dropdown}
        </select>
        
        <input  type="text" name="top"  onChange={handleTopOnChange} value={topText} placeholder="Top Input Field" />
        <input  type="text" name="Bottom"  onChange={handleBottomOnChange} value={bottomText} placeholder="Bottom Input Field" />
        <button type="submit">Generate Meme</button>
        </form>
        </div>
    )
}

export default MemeForm;