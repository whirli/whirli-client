import AbstractResource from '../AbstractResource';

export default class Products extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'wacc/products';
    }
}
