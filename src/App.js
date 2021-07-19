import React, {Component, useState} from 'react';
import './App.css';
import { FormGroup, FormLabel, FormControl } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
// import 'bootstrap/dist/css/bootstrap.min.css';

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {text: ""};
//     this.setText = this.setText.bind(this);
//   }
//   setText(text) {s
//     this.setState({text: text});
//   }
//   render() {
//     const {text} = this.state;
//     return (
//       <div className="markdown_container">
//         <textarea 
//           value = {text}
//           onChange = {(e) => this.setText(e.target.value)}
//         />  
//         <ReactMarkdown children={text} className="markdown_preview" />
//       </div>
//     );  
//   }
// }

// let marked = require("marked")
const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

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

function App() {
  
  const [markdown, setMarkdown] = useState(placeholder);

  return (
    <div >
      <h1 className="text-center">Convert your markdown</h1>
      <div id="title" className="row">
          <h3 className="col-6">Input</h3>
          <h3 className="col-6">Output</h3>
        </div>  
      <div className="markdown_container row">
        
        <textarea
          id="editor"
          className="col-6"
          value = {markdown}
          onChange = {(e) => setMarkdown(e.target.value)}
        />
        <div id="preview" className="preview_container col-6">
          <ReactMarkdown children={markdown} />
        </div>
      </div> 

    </div>
  );
}

export default App;