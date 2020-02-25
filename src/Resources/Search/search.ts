import AbstractResource from '../AbstractResource';

export default class Search extends AbstractResource {
    initialise(): void {
        this.resourcePath = 'search';
    }

    public all: Function = this.createMethodFromPartialSpec({
        method: 'GET',
        path: '',
    });
}
