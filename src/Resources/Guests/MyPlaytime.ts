import AbstractResource from '../AbstractResource';

export default class MyPlaytime extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'guest';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/users/playtime/{id}',
    });
}
