import deleteItem from "../../loads/deleteItem.js";

/**
 * @param {Element} element
 */
export default (element) => {
    /**
     * 
     * @param {KeyboardEvent} e 
     */
    const clickFunc = function (e) {
        const target = e.target;
        if (!target.closest('.button') || !target) return;
        const currItem = target.parentElement.parentElement;
        const id = +currItem.getAttribute('data-id');
        currItem.remove();
        deleteItem(id);
    }
    element.addEventListener('click', clickFunc);
}