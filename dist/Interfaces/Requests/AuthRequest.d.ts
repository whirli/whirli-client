export interface ForgotPasswordRequest {
    email: string;
}
export interface ResetPasswordRequest {
    email: string;
    token: string;
    password: string;
    passwordConfirmation: string;
}
export interface ValidateTokenRequest {
    email: string;
    token: string;
}
