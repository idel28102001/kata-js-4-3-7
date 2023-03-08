/**
 * 
 * @param {Object} obj
 * @param {Number} obj.id 
 * @param {String} obj.title 
 * @param {String} obj.owner 
 * @param {Number} obj.stars 
 */
export default function ({ id, name, owner, stars }) {
    const li = document.createElement('li');
    li.className = 'saves__item item';
    li.setAttribute('data-id', id);
    li.insertAdjacentHTML('afterbegin',
        `<div class="item__content">
            <ul class="item__list">
                <li class="item__item">Name: ${name}</li>
                <li class="item__item">Owner: ${owner}</li>
                <li class="item__item">Stars: ${stars}</li>
            </ul>
        </div>
        <div class="item__element">
            <button class="item__button button">×</button>
        </div>`
    );
    return li;
}