import addItem from "../../loads/addItem.js";
import listItem from "../list/listItem.js";
import parser from "../list/parser.js";

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
        const parent1 = event.target.parentElement;
        const parent2 = parent1.parentElement;
        const input = parent2.querySelector('.dropdown__input');
        input.value = '';
        parent1.innerHTML = '';
        const object = parser(curr);
        const item = listItem(object);
        savesList.append(item);
        addItem(object);
    }
    nodeElement.addEventListener('click', click);
}