import React, { useState } from "react";

export default function TextForm(props) {

  const handleUpClick = ()=>{
    // console.log("clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase","success");
  };

  const handleLowClick = ()=>{
    // console.log("clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase","success");
  };

  const handleReverseClick = ()=>{
    // console.log("clicked");
    let newText = text.split("").reverse().join("");
    setText(newText);
    props.showAlert("Text Reversed","success");
  };

  const handleOnChange = (event)=>{
    // console.log("handleUpChange");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange}  
        style={{backgroundColor: props.mode==='dark'?'grey':'white', color : props.mode==='dark'?'white':'#042743'}} 
         id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleUpClick} 
      //  style={{backgroundColor: props.mode==='dark'?'#235600':'blue'}} 
       >
        Convert To Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowClick}
      // style={{backgroundColor: props.mode==='dark'?'#235600':'blue'}}
      >
        Convert To Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleReverseClick}
      // style={{backgroundColor: props.mode==='dark'?'#235600':'blue'}}
      >
        Reverse
      </button>
    </div>
    <div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1>Your text summary</h1>
      <p>Words{text.length>0 ? text.trimStart().trimEnd().split(" ").length : 0} ,charaxcters  {text.length}</p>
      <p> {0.008 * text.split(" ").length } time min</p>
      <h1>Preview</h1>
      <p>{text.length>0?text:"enter something to preview it."}</p>
    </div>
    </>
  );
}
