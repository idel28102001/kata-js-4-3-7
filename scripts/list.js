import deleteItemEvent from "./components/list/deleteItemEvent.js";
import listItems from "./components/list/listItems.js";
import loadList from "./loads/loadList.js";
/**
 * 
 * @param {Element} github 
 */
export const list = (github) => {
    const saveList = github.querySelector('.saves__list');
    const elements = loadList();
    const items = listItems(elements);
    const listParent = github.querySelector('.saves__list');
    deleteItemEvent(listParent);
    saveList.append(items);
}