import debounce from "../../common/debounce.js";
import clearSearchList from "./clearSearchList.js";
import getItems from "./getItems.js";

/**
 * @param {Element} element
 */
export default (github) => {
    const element = github.querySelector('.dropdown__input');
    /**
     * 
     * @param {KeyboardEvent} event 
     */
    const filter = (event) => {
        const input = event.target;
        const filterWord = input.value.trim();
        if (!filterWord) return clearSearchList(github);
        const div = input.nextElementSibling;
        div.innerHTML = '';
        getItems(filterWord).then(items => {
            div.append(items);
        });
    }
    const filerDeb = debounce(filter, 300);
    element.addEventListener('keyup', filerDeb);
}