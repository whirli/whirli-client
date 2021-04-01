import AbstractResource from '../../AbstractResource';

export default class WaitSpots extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/waitspots';
        this.defaultAccess = 'wacc';
    }

    public create: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/{id}',
    });

    public delete: Function = this.createMethodFromPartialSpec({
        method: 'DELETE',
        path: '/{id}',
    });
}
