/**
 * 
 * @param {Function} cb 
 * @param {Number} timeInterval 
 * @returns 
 */
export default (cb, timeInterval) => {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            cb.apply(this, args);
        }, timeInterval)
    }
}