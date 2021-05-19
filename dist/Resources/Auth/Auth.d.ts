import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { ForgotPasswordRequest, ResetPasswordRequest, ValidateTokenRequest } from '../../Interfaces/Requests/AuthRequest';
export default class Auth extends AbstractResource {
    initialise(): void;
    forgotPassword: (body: ForgotPasswordRequest, ...args: HttpClientConfig) => HttpClientResponse;
    resetPassword: (body: ResetPasswordRequest, ...args: HttpClientConfig) => HttpClientResponse;
    validateResetPasswordToken: (body: ValidateTokenRequest, ...args: HttpClientConfig) => HttpClientResponse;
}
