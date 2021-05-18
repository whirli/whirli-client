import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { ForgotPasswordRequest, ResetPasswordRequest, ValidateTokenRequest } from './AuthRequestInterfaces';

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

    public resetPassword: (
        { email, password, passwordConfirmation, token }: ResetPasswordRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/reset',
    });

    public validateResetPasswordToken: (
        { email, token }: ValidateTokenRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/validate',
    });
}
