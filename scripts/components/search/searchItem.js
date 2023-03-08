//<a class="dropdown__item" href="#">Redux</a>

/**
 * 
 * @param {Object} obj
 * @param {Number} obj.id 
 * @param {String} obj.title 
 * @param {String} obj.owner 
 * @param {Number} obj.stars 
 */
export default function ({ id, name, owner, stars }) {
    const a = document.createElement('a');
    a.classList.add('dropdown__item');
    a.setAttribute('href', '#');
    a.setAttribute('data-id', id);
    a.setAttribute('data-name', name);
    a.setAttribute('data-owner', owner);
    a.setAttribute('data-stars', stars);
    a.textContent = name;
    return a;
}