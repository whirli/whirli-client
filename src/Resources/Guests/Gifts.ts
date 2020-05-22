import AbstractResource from '../AbstractResource';

export default class Gifts extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/gifts';
        this.defaultAccess = 'guest';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public placeOrder: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}/pay',
    });
}
