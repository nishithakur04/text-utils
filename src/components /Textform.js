import React, { useState } from 'react'

export default function Textform(props) {
    const handleUpClick = () => {

        setText(text.toUpperCase());
        props.showAlert("Converted to uppercase", "success")


    }
    const handleLowClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase", "success")
    }
    const handleStartClick = () => {
        let newText = text.split(' ');
        console.log(newText);
        for (let i = 0; i < newText.length; i++) {

            newText[i] = newText[i][0].toUpperCase() + newText[i].substring(1);
        }
        console.log(newText.join(" "));
        setText(newText.join(" "));
        props.showAlert("Converted to Startcase", "success")
    }
    const handleClearClick = () => {

        let clear = "";
        setText(clear);
        props.showAlert("Cleared", "success")
    }
    const handleRemoveExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces has been removed", "success")

    }
    const handleOnChange = (event) => {
        console.log("onchange fired")
        setText(event.target.value)
    }
    const [text, setText] = useState("");

    return (
        <>
            <div className='container my-3' style={ { color: props.mode === 'dark' ? 'white' : 'black' } } >
                <h1>{ props.heading } </h1>
                <div className="mb-3">

                    <textarea className="form-control" style={ { backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : 'black' } } value={ text } onChange={ handleOnChange } id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={ handleUpClick }>convert to Uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={ handleLowClick }>convert to Lowercase</button>
                { <button type="button" className="btn btn-primary mx-2" onClick={ handleStartClick }>convert to Startcase</button> }
                <button type="button" className="btn btn-primary mx-2" onClick={ handleClearClick }>clear Text</button>
                <button type="button " className='btn btn-primary mx-2' onClick={ handleRemoveExtraSpaces }>Remove Extra Spaces</button>
            </div>
            <div className='container my-4' style={ { color: props.mode === 'dark' ? 'white' : 'black' } }>
                <h3>Your Text Summary</h3>
                <p>Total characters <b>{ text.length }</b></p>
                <p>Total words <b>{ text.split(" ").length - 1 }</b></p>
                <p>Total minutes to read <b>{ (text.split(" ").length - 1) * 0.008 }</b></p>
                <h3>Preview</h3>
                <p>{ text.length === 0 ? 'Write something above to Preview' : text }</p>
            </div>
        </>





    )
}
