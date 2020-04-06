import AbstractResource from '../AbstractResource';

export default class Password extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/password';
        this.defaultAccess = 'guest';
    }

    public validate: Function = this.createMethodFromPartialSpec({
        method: 'POST',
        path: '/validate',
    });
}
