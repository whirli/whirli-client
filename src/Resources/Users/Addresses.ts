import AbstractResource from '../AbstractResource';

export default class Addresses extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/addresses';
        this.defaultAccess = 'member';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PUT',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });

    public default: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/{id}',
    });
}
