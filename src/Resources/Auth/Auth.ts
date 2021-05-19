import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import {
    ForgotPasswordRequest,
    ResetPasswordRequest,
    ValidateTokenRequest,
} from '../../Interfaces/Requests/AuthRequest';

export default class Auth extends AbstractResource {
    initialise(): void {
        this.defaultAccess = 'guest';
    }

    public forgotPassword: (
        body: ForgotPasswordRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/forgot',
    });

    public resetPassword: (
        body: ResetPasswordRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/reset',
    });

    public validateResetPasswordToken: (
        body: ValidateTokenRequest,
        ...args: HttpClientConfig
    ) => HttpClientResponse = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/password/validate',
    });
}
