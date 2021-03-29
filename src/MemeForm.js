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
            meme: image,
            top: topText, 
            bottom: bottomText,
        };

    fetch(`https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=${image}&bottom=${bottomText}&top=${topText}&font_size=50&font=Impact`, {
    method: 'GET',
    headers: {
    "x-rapidapi-key": "d45c4bf44bmsh5794f268d449d19p18f503jsn618a9ca69a76",
	"x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
  }
    })
    .then(res => res.blob())
    // .then(data => console.log(data) )
    .then((newMemeImage) => {
        const outside = URL.createObjectURL(newMemeImage)
        console.log(outside)
        setApiImageUrl(outside)
        handleNewMemeForm(outside)
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