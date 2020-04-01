import AbstractResource from '../AbstractResource';

export default class Subscriptions extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/codes';
        this.defaultAccess = 'guest';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{name}',
    });
}
