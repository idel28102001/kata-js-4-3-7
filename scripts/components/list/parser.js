/**
 * @param {Element} element
 */
export default (element) => {
    const name = element.getAttribute('data-name');
    const owner = element.getAttribute('data-owner');
    const stars = +element.getAttribute('data-stars') || 0;
    const id = +element.getAttribute('data-id') || 0;
    return { id, name, owner, stars };
}