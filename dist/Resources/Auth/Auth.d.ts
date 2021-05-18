import AbstractResource from '../AbstractResource';
import { HttpClientConfig, HttpClientResponse } from '../../Interfaces/HttpClient';
import { ForgotPasswordRequest, ResetPasswordRequest, ValidateTokenRequest } from './AuthRequestInterfaces';
export default class Auth extends AbstractResource {
    initialise(): void;
    forgotPassword: ({ email }: ForgotPasswordRequest, ...args: HttpClientConfig) => HttpClientResponse;
    resetPassword: ({ email, password, passwordConfirmation, token }: ResetPasswordRequest, ...args: HttpClientConfig) => HttpClientResponse;
    validateResetPasswordToken: ({ email, token }: ValidateTokenRequest, ...args: HttpClientConfig) => HttpClientResponse;
}
