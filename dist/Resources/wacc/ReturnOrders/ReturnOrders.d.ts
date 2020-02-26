import AbstractResource from '../../AbstractResource';
export default class ReturnOrders extends AbstractResource {
    initialise(): void;
    all: Function;
    get: Function;
    create: Function;
    complete: Function;
}
