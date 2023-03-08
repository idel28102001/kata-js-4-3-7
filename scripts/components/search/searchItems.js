import searchItem from "./searchItem.js";

/**
 * 
 * @param {Array} array 
 * @returns 
 */
export default function (array) {
    const elements = new DocumentFragment();
    array.forEach(e => {
        const result = searchItem(e);
        elements.append(result);
    });
    return elements;
}