import listItem from "./listItem.js";


/**
 * 
 * @param {Array} array 
 * @returns 
 */
export default function (array) {
    const elements = new DocumentFragment();
    array.forEach(e => {
        const result = listItem(e);
        elements.append(result);
    });
    return elements;
}