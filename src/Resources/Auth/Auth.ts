import AbstractResource from '../AbstractResource';

export default class Auth extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/auth';
        this.defaultAccess = 'guest';
    }

    public login: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/forgot',
    });

    public register: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/reset',
    });
}
