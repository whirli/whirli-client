import AbstractResource from '../AbstractResource';

export default class MyPlaytime extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/playtime';
        this.defaultAccess = 'member';
    }

    public get: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
