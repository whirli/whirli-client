import AbstractResource from '../AbstractResource';
import PartialSpec from '../../Interfaces/PartialSpec';

export default class Auth extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'auth';
    }

    login(): Function {
        const spec: PartialSpec = {
            method: 'POST',
            path: '/login',
        };
        return this.createMethodFromPartialSpec(spec);
    }

    logout(): Function {
        const spec: PartialSpec = {
            method: 'GET',
            path: '/logout',
        };
        return this.createMethodFromPartialSpec(spec);
    }

    register(): Function {
        const spec: PartialSpec = {
            method: 'POST',
            path: '/register',
        };
        return this.createMethodFromPartialSpec(spec);
    }
}
