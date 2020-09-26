import React from 'react';
import katex from 'katex';
import './Latex.scss'

class Latex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: "a + b",
            isTextAreaVisible: false,
        };
        this.el = React.createRef();

        this.handleChange = this.handleChange.bind(this); // Binding
        this.update = this.update.bind(this);
    }

    update(formula) {
        console.log(formula);
        katex.render(formula, this.el.current, {
            throwOnError: false,
            output: "mathml",
            displayMode: true,
        });
    }

    componentDidMount() {
        this.update(this.state.value);
    }
    handleChange(event) {
        let state = this.state;
        state.value = event.target.value;
        this.setState(state);
        this.update(event.target.value);
    }
    render() {
        return (
            <div className="latex">
                <div ref={this.el} onClick={() => {}}/>
                <textarea value={this.state.value} onChange={this.handleChange} /> 
            </div>
        );
    }
}

export default Latex;