import loadList from "./loadList.js";
import saveList from "./saveList.js";

/**
 * @param {Number} id
 */
export default (id) => {
    const list = loadList();
    saveList(list.filter(e => e.id !== id));
};