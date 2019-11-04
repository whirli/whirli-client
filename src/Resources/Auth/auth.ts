import AbstractResource from '../AbstractResource';
import PartialSpec from '../../Interfaces/PartialSpec';
import LoginBody from '../../Interfaces/LoginBody';

export default class Auth extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'auth';
    }

    login(body: LoginBody): Function {
        const spec: PartialSpec = {
            method: 'POST',
            path: '/login',
            requestBody: body,
        };
        return this.createMethodFromPartialSpec(spec)();
    }

    logout(): Function {
        const spec: PartialSpec = {
            method: 'GET',
            path: '/logout',
        };
        return this.createMethodFromPartialSpec(spec)();
    }

    register(): Function {
        const spec: PartialSpec = {
            method: 'POST',
            path: '/register',
        };
        return this.createMethodFromPartialSpec(spec)();
    }
}
