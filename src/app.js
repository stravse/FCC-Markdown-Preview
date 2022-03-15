import React from "react";
import Editor from "./editor"
import Previewer from "./previewer"
import "./scss/app.scss";


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input: placeholder,
        }
    }

    handleChange(event){
        this.setState({
                input: event.target.value
        })
    }

    render(){
        return(
            <div className="big-container">
                <Editor onChange={(event) => this.handleChange(event)} state={this.state.input} />
                <Previewer state={this.state.input} />
            </div>
        )
    }
}


const placeholder = `# Welcome to my React Markdown Previewer!

Making a header requires "#" and a space infront of the text you want to make as a header. adding more "#" like the one below will make a subheading.

## This is a sub-heading...
### And here's some other cool stuff:

Just typing normally will result in a " &#60;p&#62;" tag.

Heres some code, \`<div></div>\`, between 2 backticks. will enclose it in "&#60;code&#62;" tag

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

export default App;