import AbstractResource from '../AbstractResource';
export default class Auth extends AbstractResource {
    initialise(): void;
    forgotPassword: Function;
    resetPassword: Function;
    validateResetPasswordToken: Function;
}
