import React from 'react';
import './App.css';
import ReactEditor from './Editor.js'

import Formula from './Formula';
import SimpleImage from '@editorjs/simple-image'; 
import Header from '@editorjs/header';
import List from '@editorjs/list';
import CodeTool from '@editorjs/code';

const plugin_list = {
    header: Header,
    list: List,
    image: SimpleImage,
    formula: Formula,
    code: CodeTool,
};

function App() {
    return (
        <div className="App">
            <ReactEditor id="editor" plugins={plugin_list} />
        </div>
    );
}

export default App;
