import AbstractResource from '../../AbstractResource';
export default class ProductAssociations extends AbstractResource {
    initialise(): void;
    all: Function;
    create: Function;
    get: Function;
    update: Function;
    delete: Function;
    updateRelations: Function;
}
