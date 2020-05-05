import AbstractResource from '../AbstractResource';

export default class Create extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'guest';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });
}
