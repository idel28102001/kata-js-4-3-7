import addSearchElementEvent from "./components/search/addSearchElementEvent.js";
import inputEvent from "./components/search/inputEvent.js";

export const filter = (github) => {
    const dropdown = github.querySelector('.dropdown');
    const savesList = github.querySelector('.saves__list');
    addSearchElementEvent(dropdown, savesList);
    inputEvent(dropdown);
}