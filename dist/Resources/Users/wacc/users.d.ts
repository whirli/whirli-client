import AbstractResource from '../../AbstractResource';
export default class Users extends AbstractResource {
    initialise(): void;
    all: Function;
    get: Function;
    create: Function;
    update: Function;
    delete: Function;
}
