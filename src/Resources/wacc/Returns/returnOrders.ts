import AbstractResource from '../../AbstractResource';

export default class ReturnOrders extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'return-orders';
    }

    public all: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'GET',
        path: '',
    });

    public get: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'GET',
        path: '/{id}',
    });

    public create: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'POST',
        path: '',
    });

    public complete: Function = this.createMethodFromPartialSpec({
        access: 'wacc',
        method: 'PUT',
        path: '/{id}/complete',
    });
}
