import loadList from "./loadList.js";
import saveList from "./saveList.js";

/**
 * @param {Object} obj 
 * @param {Number} obj.id
 * @param {String} obj.name
 * @param {String} obj.owner
 * @param {Number} obj.stars
 */
export default (obj) => {
    const list = loadList();
    saveList([...list, obj]);
};