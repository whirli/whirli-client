import AbstractResource from '../AbstractResource';

export default class Auth extends AbstractResource {
    initialise(): void {
        this.defaultAccess = 'guest';
    }

    public forgotPassword: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/forgot',
    });

    public resetPassword: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/reset',
    });
}
