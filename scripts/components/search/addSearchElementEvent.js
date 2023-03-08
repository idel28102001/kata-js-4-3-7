import addItem from "../../loads/addItem.js";
import listItem from "../list/listItem.js";
import parser from "../list/parser.js";
import clearSearchList from "./clearSearchList.js";

/**
 * @param {Element} nodeElement
 * @param {Element} savesList
 */
export default (nodeElement, savesList) => {
    /**
     * 
     * @param {PointerEvent} event 
     */
    const click = function (event) {
        if (!event.target) return;
        const curr = event.target;
        if (!curr.closest('.dropdown__item')) return;
        const parent = event.target.parentElement.parentElement;
        const input = parent.querySelector('.dropdown__input');
        input.value = '';
        clearSearchList(nodeElement);
        const object = parser(curr);
        const item = listItem(object);
        savesList.append(item);
        addItem(object);
    }
    nodeElement.addEventListener('click', click);
}