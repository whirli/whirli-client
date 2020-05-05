import AbstractResource from '../../AbstractResource';
export default class Products extends AbstractResource {
    initialise(): void;
    all: Function;
    create: Function;
    get: Function;
    update: Function;
    delete: Function;
    updateRelated: Function;
    deleteRelated: Function;
}
