import React from 'react';

import EditorJS from '@editorjs/editorjs';

class ReactEditor extends React.Component {
    componentDidMount() {
        this.editor = new EditorJS({
            holder: this.props.id,
            autofocus: true,
            tools: this.props.plugins,
        });
    }
    render() {
        return <div id={this.props.id}></div>
    }
}

export default ReactEditor;