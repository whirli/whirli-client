import AbstractResource from '../AbstractResource';

export default class Basket extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/baskets';
        this.defaultAccess = 'guest';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });
}
