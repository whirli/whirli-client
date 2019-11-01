import AbstractResource from '../AbstractResource';
import PartialSpec from '../../Interfaces/PartialSpec';
import LoginBody from '../../Interfaces/LoginBody';

export default class Auth extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'auth';
    }

    login(loginBody: LoginBody): Function {
        const spec: PartialSpec = {
            method: 'POST',
            path: '/login',
            requestBody: loginBody,
        };
        return this.createMethodFromPartialSpec(spec);
    }

    logout(loginBody: LoginBody): Function {
        const spec: PartialSpec = {
            method: 'GET',
            path: '/logout',
            requestBody: loginBody,
        };
        return this.createMethodFromPartialSpec(spec);
    }

    register(loginBody: LoginBody): Function {
        const spec: PartialSpec = {
            method: 'POST',
            path: '/register',
            requestBody: loginBody,
        };
        return this.createMethodFromPartialSpec(spec);
    }
}
