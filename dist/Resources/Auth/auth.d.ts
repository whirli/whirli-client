import AbstractResource from '../AbstractResource';
import LoginBody from '../../Interfaces/LoginBody';
export default class Auth extends AbstractResource {
    initialise(): void;
    login(body: LoginBody): Function;
    logout(): Function;
    register(): Function;
}
