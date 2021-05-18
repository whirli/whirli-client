import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { ForgotPasswordRequest } from './AuthInterfaces';
export default class Auth extends AbstractResource {
    initialise(): void;
    forgotPassword: ({ email }: ForgotPasswordRequest, ...args: HttpClientConfig) => HttpClientResponse;
    resetPassword: (...args: HttpClientConfig) => HttpClientResponse;
    validateResetPasswordToken: (...args: HttpClientConfig) => HttpClientResponse;
}
