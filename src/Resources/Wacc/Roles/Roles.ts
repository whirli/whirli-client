import AbstractResource from '../../AbstractResource';

export default class Roles extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/roles';
        this.defaultAccess = 'wacc';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
