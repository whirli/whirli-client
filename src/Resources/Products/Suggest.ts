import AbstractResource from '../AbstractResource';

export default class Suggest extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'guest';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/products/',
    });
}
