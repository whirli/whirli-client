import AbstractResource from '../AbstractResource';

export default class Details extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/users';
        this.defaultAccess = 'member';
    }

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}',
    });
}
