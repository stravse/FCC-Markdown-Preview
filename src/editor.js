import React from "react";
import Banner from "./banner";
import "./scss/editor.scss"


/*
this file will handle all the changes and will place them all back to the app.js
this file will handle all markdown and is sole responsible of user input in the text area
*/

function Editor(props) {
    return (
        <div className="editor-container">
            <Banner title={"Markdown Input"} />
            <textarea onChange={props.onChange} value={props.state} className="markdown" spellCheck="false" id="editor"></textarea>
        </div>
    )
}

export default Editor;