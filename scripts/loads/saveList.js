/**
 * @param {Array.<{id:Number,name: String, owner: String,stars: Number}>} list
 */
export default (list = []) => {
    try {
        localStorage.setItem('items', JSON.stringify(list));
    }
    catch (e) {
        localStorage.setItem('items', JSON.stringify([]));
    }
    return list;
}