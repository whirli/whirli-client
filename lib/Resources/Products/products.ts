import AbstractResource from '../AbstractResource';

export default class Products extends AbstractResource {
    initialise() {
        this.resourcePath = 'products';
    }
}
