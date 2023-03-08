import searchItems from "./searchItems.js";

/**
 * @param {String} word;
 */
export default async (word) => {
    const url = `https://api.github.com/search/repositories?q=${word}&per_page=5&page=1`;
    const newItems = await fetch(url).then(e => e.json());
    let items = [];
    if (newItems.items) {
        items = newItems.items.map(e => ({ id: e.id, name: e.name, owner: e.owner.login, stars: e.stargazers_count }));
    }
    return searchItems(items);
}