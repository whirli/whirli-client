import AbstractResource from '../AbstractResource';

export default class Details extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/card';
        this.defaultAccess = 'member';
    }

    public update: Function = this.createMethodFromPartialSpec({
        method: 'PATCH',
        path: '/',
    });

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
