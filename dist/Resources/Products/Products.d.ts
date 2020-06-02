import AbstractResource from '../AbstractResource';
export default class Products extends AbstractResource {
    initialise(): void;
    all: () => any;
    get: Function;
}
