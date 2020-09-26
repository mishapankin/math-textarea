import katex from 'katex/dist/katex.mjs';
import 'katex/dist/katex.min.css';

class Formula {
    static get toolbox() {
        return {
            title: 'Formula',
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4H6v2l6.5 6L6 18v2h12v-3h-7l5-5-5-5h7z"/></svg>',
        };
    }

    static get enableLineBreaks() {
        return true;
    }

    constructor({ data, api }) {
        this.api = api;
        this.CSS = {
            baseClass: this.api.styles.block,
            input: this.api.styles.input,
            wrapper: 'ce-code',
            textarea: 'ce-formula__textarea',
        };

        this.data = data;
        this.nodes = this.drawView();
    }
    
    
    render() {
        const render = () => katex.render(this.nodes.textarea.value, this.nodes.formula, {
            throwOnError: false,
            output: "htmlAndMathml",
            displayMode: true,
        });

        render();
        this.nodes.textarea.addEventListener('input', (event) => render());

        return this.nodes.wrapper;
    }

    drawView() {
        const wrapper = document.createElement('div');
        
        const textarea = document.createElement('textarea');
        const formula = document.createElement('output');
    
        wrapper.classList.add(this.CSS.baseClass, this.CSS.wrapper);
        textarea.classList.add(this.CSS.textarea, this.CSS.input);
        wrapper.appendChild(textarea);
        wrapper.appendChild(formula);

        return {
            wrapper: wrapper,
            textarea: textarea,
            formula: formula,
        };
    }

    static get sanitize() {
        return {
          code: true,
        };
    }

    save(blockContent) {
        return { 
            formula: this.nodes.textarea.input,
        }
    }
}

export default Formula;