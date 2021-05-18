import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { ForgotPasswordRequest } from './AuthInterfaces';

export default class Auth extends AbstractResource {
    initialise(): void {
        this.defaultAccess = 'guest';
    }

    public forgotPassword: (
        { email }: ForgotPasswordRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/forgot',
    });

    public resetPassword: (...args: HttpClientConfig) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/reset',
    });

    public validateResetPasswordToken: (
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/validate',
    });
}
