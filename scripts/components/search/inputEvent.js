import debounce from "../../common/debounce.js";
import getItems from "./getItems.js";

/**
 * @param {Element} element
 */
export default (element) => {
    /**
     * 
     * @param {KeyboardEvent} event 
     */
    const filter = (event) => {
        const input = event.target;
        const filterWord = input.value.trim();
        const div = input.nextElementSibling;
        div.innerHTML = '';
        getItems(filterWord).then(items => {
            div.append(items);
        });
    }
    const filerDeb = debounce(filter, 300);
    element.addEventListener('keyup', filerDeb);
}