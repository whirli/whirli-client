import AbstractResource from '../AbstractResource';

export default class Orders extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/orders';
        this.defaultAccess = 'member';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });
}
