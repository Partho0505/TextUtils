import React, {useState} from 'react'

export default function TextForm(props) {

    const [text, setText] = useState("");
    const onChangeHandler = (e) => {
        setText(e.target.value)
    }

    const onClearClickHandler = () => {
        let newText = '';
        setText(newText);
        props.showAlert('Text clered', 'success');
    }

    const onUpClickHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase', 'success');
    }
    const onLowClickHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase', 'success');
    }

    const replacecasefunc = () => {
        let existing_text = prompt("Enter which word to replace : ");
        let replaced_text = prompt("Enter New Text");
        setText(text.replaceAll(existing_text, replaced_text))
        props.showAlert('All words replaced correctly', 'success');
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggleSpeak')
        if (toogle.textContent === "Speak") {
            toogle.innerHTML = "Stop"
        }
        else {
            toogle.innerHTML = "Speak"
            if (toogle.innerHTML === "Speak"){
                window.speechSynthesis.cancel()
            }
        }
    }

    const copyText = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard", "success");
    }

    return (
    <>
        <div className='container my-3'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control my-3" value={text} onChange={onChangeHandler} id="textBox" rows="8" placeholder='Enter your text here' ></textarea>
                
                <button disabled={text.length===0} className='btn btn-primary my-1 mx-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={onClearClickHandler}>Clear Text</button>
                <button disabled={text.length===0}className="btn btn-primary my-1 mx-1" onClick={onUpClickHandler}>Convert to Uppercase</button>
                <button disabled={text.length===0}className="btn btn-primary my-1 mx-1" onClick={onLowClickHandler}>Convert to Lowercase</button>
                <button disabled={text.length===0}className="btn btn-primary my-1 mx-1" onClick={replacecasefunc}>Replace Words</button>
                <button disabled={text.length===0}className="btn btn-primary my-1 mx-1" onClick={speak} id="toggleSpeak">Speak</button>
                <button data-tip data-for="copyTip" disabled={text.length===0}className="btn btn-primary my-1 mx-1" onClick={copyText}><i class="fa fa-clipboard" aria-hidden="true"></i> </button> 
            </div>
        </div>

        <div className="container my-3" >
            <h2>Your Text Summary</h2>
            <p> {text.trim().length>0?text.trim().split(/\s+/).length:"0"} words and {text.trim().length} characters. </p>
            <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        </div>
        <div className="container my-3" >
            <h2>Preview</h2>
            <div className="mb-3">
                <p>{text.length>0?text:"Enter Your text in the above textbox to preview here"}</p>
            </div>
        </div>
    </>
  )
}
