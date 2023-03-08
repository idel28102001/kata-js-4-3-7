/**
 * @returns {Array.<{id:Number,name: String, owner: String,stars: Number}>}
 */
export default () => {
    let result = localStorage.getItem('items');
    try {
        return JSON.parse(result) || [];
    }
    catch (e) {
        return [];
    }
}