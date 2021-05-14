import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
export default class Auth extends AbstractResource {
    initialise(): void;
    forgotPassword: (...args: HttpClientConfig) => HttpClientResponse;
    resetPassword: (...args: HttpClientConfig) => HttpClientResponse;
    validateResetPasswordToken: (...args: HttpClientConfig) => HttpClientResponse;
}
