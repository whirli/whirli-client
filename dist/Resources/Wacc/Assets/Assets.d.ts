import AbstractResource from '../../AbstractResource';
export default class Assets extends AbstractResource {
    initialise(): void;
    all: Function;
    create: Function;
    get: Function;
    update: Function;
    updateAll: Function;
    delete: Function;
}
