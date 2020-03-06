import AbstractResource from '../AbstractResource';

export default class OrderLines extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'wacc/order-lines';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });
}
