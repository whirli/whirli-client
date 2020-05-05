import AbstractResource from '../AbstractResource';
export default class Subscription extends AbstractResource {
    initialise(): void;
    create: Function;
    update: Function;
    pay: Function;
}
