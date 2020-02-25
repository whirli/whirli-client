import AbstractResource from '../../AbstractResource';

export default class WACCAuth extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'auth';
    }

    public login: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/login',
    });

    public logout: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/logout',
    });

    public register: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/register',
    });
}
