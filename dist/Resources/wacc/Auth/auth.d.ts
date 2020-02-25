import AbstractResource from '../../AbstractResource';
export default class WACCAuth extends AbstractResource {
    initialise(): void;
    login: Function;
    logout: Function;
    register: Function;
}
