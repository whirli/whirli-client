import AbstractResource from '../AbstractResource';

export default class ReturnOrders extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'return-orders';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public complete: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}/complete',
    });
}
