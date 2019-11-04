import AbstractResource from '../AbstractResource';
import LoginBody from '../../Interfaces/LoginBody';
export default class Auth extends AbstractResource {
    initialise(): void;
    login(loginBody: LoginBody): Function;
    logout(loginBody: LoginBody): Function;
    register(loginBody: LoginBody): Function;
}
