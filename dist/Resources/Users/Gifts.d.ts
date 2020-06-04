import AbstractResource from '../AbstractResource';
export default class Gifts extends AbstractResource {
    initialise(): void;
    create: Function;
    getActive: Function;
    get: Function;
    update: Function;
    placeOrder: Function;
    claimGuestBasket: Function;
}
