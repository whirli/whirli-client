import AbstractResource from '../AbstractResource';

export default class Contact extends AbstractResource {
    initialise(): void {
        this.resourcePath = '';
        this.defaultAccess = 'guest';
    }

    public submit: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/contact-us',
    });
}
