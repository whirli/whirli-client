import AbstractResource from '../AbstractResource';
export default class BasketLine extends AbstractResource {
    initialise(): void;
    addToGuest: Function;
    add: Function;
    removeFromGuest: Function;
    remove: Function;
    updateGuest: Function;
    update: Function;
}
