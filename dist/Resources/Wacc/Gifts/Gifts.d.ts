import AbstractResource from '../../AbstractResource';
export default class Gifts extends AbstractResource {
    initialise(): void;
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    delete: Function;
    print: Function;
}
