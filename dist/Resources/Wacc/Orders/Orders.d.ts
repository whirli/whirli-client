import AbstractResource from '../../AbstractResource';
export default class Orders extends AbstractResource {
    initialise(): void;
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    delete: Function;
    print: Function;
    getForPicking: Function;
}
