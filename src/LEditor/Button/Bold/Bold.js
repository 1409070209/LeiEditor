
import {addClassName, removeClassName, strToElement} from "../../Util/domUtil";

class Bold {
    _editor;

    _template = '<button><i class="icon-font icon-bold"></i></button>';
    _button;
    constructor(editor) {
        this._editor = editor;
    }
    eventListen() {
        this._editor.configEventListener('click' , (e)=>{
            if (e.target.tagName === 'B' || e.target.tagName === 'STRONG') {
                addClassName(this._button , 'lei-active');
            } else {
                removeClassName(this._button , 'lei-active');
            }
        });
    }
    render(element) {
        const button = strToElement(this._template)[0];
        this._button = button;
        this._button.onclick = (e)=>{
            e.preventDefault();
            this._editor.execCommand('bold');
        };
        element.appendChild(button);
        this.eventListen();
    }
}

export default Bold;