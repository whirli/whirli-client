import AbstractResource from '../AbstractResource';

export default class Addons extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/subscription-addons';
        this.defaultAccess = 'guest';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
