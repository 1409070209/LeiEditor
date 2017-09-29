import {strToHtmlElements} from "../../util/FunctionUtils";
import "./Italic.css"

class Italic{
    leiEditor;
    leiDocument;
    html='<button class="LeiEditor-button"><i class="icon-font icon-italic"></i></button>';

    constructor(leiEditor, leiDocument) {
        this.leiEditor = leiEditor;
        this.leiDocument = leiDocument;
    }
    event = () => {
        this.leiDocument.execCommand('Italic');
    };
    addInContainer(container){
        const element = strToHtmlElements(this.html);
        element[0].onclick = this.event;
        container.appendChild(element[0]);
        return true;
    }
}
export default Italic;