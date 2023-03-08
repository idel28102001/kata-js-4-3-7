import addSearchElementEvent from "./components/search/addSearchElementEvent.js";
import inputEvent from "./components/search/inputEvent.js";

export const filter = (github) => {
    const dropdownList = github.querySelector('.dropdown');
    const input = github.querySelector('.dropdown__input');
    const savesList = github.querySelector('.saves__list');
    addSearchElementEvent(dropdownList, savesList);
    inputEvent(input);
}