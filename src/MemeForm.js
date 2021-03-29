import React, { useState } from "react";

function MemeForm({handleNewMemeForm}) {

    const [image, setImage] = useState("")
    const [topText, setTopText] = useState("")
    const [bottomText, setBottomText] = useState("")

    function handleSubmit(e){
        e.preventDefault();
        const data = {
            image: image,
            top: topText, 
            bottom: bottomText,
        };

fetch('https://ronreiter-meme-generator.p.rapidapi.com/meme?meme=Condescending-Wonka&bottom=Bottom%20Text&top=Top%20Text&font_size=50&font=Impact', {
  method: 'POST',
  headers: {
    // 'Content-Type': 'application/json',
    "x-rapidapi-key": "d45c4bf44bmsh5794f268d449d19p18f503jsn618a9ca69a76",
	"x-rapidapi-host": "ronreiter-meme-generator.p.rapidapi.com"
  },
  body: JSON.stringify(data),
})
.then(response => response.json())
.then((newMeme) => {
  handleNewMemeForm(newMeme)
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
      <form onSubmit={handleSubmit}>
        <input  type="text" name="image"  onChange={handleImageOnChange} value={image} placeholder="Image URL" />
        <input  type="text" name="top"  onChange={handleTopOnChange} value={topText} placeholder="Top Input Field" />
        <input  type="text" name="Bottom"  onChange={handleBottomOnChange} value={bottomText} placeholder="Bottom Input Field" />
        <button type="submit">Generate Meme</button>
      </form>
        </div>
    )
}

export default MemeForm;