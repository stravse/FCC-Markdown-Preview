import React from "react";

import {marked} from "marked";
import Banner from "./banner"
import "./scss/previewer.scss";


/* 
this file will handle the state.input from the app.js
this is where we will parse the markdown language and display here on the display div
*/

marked.setOptions({
    breaks: true,
    renderer: new marked.Renderer(),
});

function Previewer(props){
    return(
        <div  className="previewer-container">
            <Banner title={"Markdown Preview"} />
            <div id="preview" className="preview" dangerouslySetInnerHTML={{
                __html: marked.parse(props.state)
            }} />
        </div>
        
    )
}




export default Previewer;