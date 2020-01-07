import AbstractResource from '../AbstractResource';
export default class Auth extends AbstractResource {
    initialise(): void;
    login: Function;
    logout: Function;
    register: Function;
}
