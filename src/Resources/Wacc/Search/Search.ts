import AbstractResource from '../../AbstractResource';

export default class Search extends AbstractResource {
    initialise(): void {
        this.resourcePath = '/search';
        this.defaultAccess = 'wacc';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '/',
    });
}
