import AbstractResource from '../../AbstractResource';

export default class Users extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/roles';
        this.defaultAccess = 'wacc';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
